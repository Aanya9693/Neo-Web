<script>
	import Button from '$lib/buttons/button.svelte';
	import GoogleButton from '$lib/buttons/google.svelte';
	import { onMount } from 'svelte';
	import Input from '$lib/components/form/Input.svelte';

	import Loading from '$lib/components/loading.svelte';
	import { applyAction, enhance } from '$app/forms';
	import { goto, invalidateAll } from '$app/navigation';
	import toast, { Toaster } from 'svelte-french-toast';
    import Logo from '$lib/logo.svelte';
	import Dashboardlogo from '../../../lib/dashboardlogo.svelte';

    export let data;
	export let form;

	$: if (!form?.success && form?.message) {
		toast.error(form?.message, {
			position: 'top-right'
		});
	}
	$: status = false;
	$: if (form?.success) {
		status = true;
		setTimeout(alertFunc, 1000);
	}
	const alertFunc = () => {
		status = false;
		goto(`/auth/forgot-password/verify?email=${form?.message}`);
	};

</script>
<!-- <Toaster /> -->
<main class="bg-[#081B2A] md:flex"> 
    <div class="w-full bg-[#081B2A] h-screen md:w-1/2 bg-[#081B2A] pb-5 flex">
        <div class="absolute top-0 left-0 p-14"> 
            <Logo size="big"/>
        </div>
        <div class="absolute top-0 left-0 md:w-1/2 h-full flex justify-center"> 
            <div class="flex items-center"> 
                <img src="/resetpass1.svg" alt="">
            </div>
        </div>
    </div>

    <div class="bg-white md:w-1/2 flex justify-center items-center" style="border-radius: 32px 0px 0px 32px;">
        <div class="absolute top-0 right-0 p-14"> 
            <h1 class="text-secondary text-[18.368px] text-right !leading-[27.552px] trackning-[0.115px]">API Documentation </h1>
        </div>
        <div class="flex justify-center items-center flex-col">
            <h1 class="text-[24px] font-medium !leading-6 uppercase text-secondary text-barlow mb-2">
                forgot password?
            </h1>
            <div class="text-center pt-4 2xl:pt-10 font-medium">
                <p class="text-[16px] text-secondary text-center text-barlow mb-10 !leading-6 md:w-3/4 mx-auto">
                    Drop your mail address and we will send you a link to reset your password
                </p>
                <form
                    class="flex flex-col mx-12 "
                    method="POST"
                    action="?/forgot_password"
                    use:enhance={() => {
                        return async ({ result }) => {
                            invalidateAll();
                            await applyAction(result);
                        };
                    }}
                    >
                    <div class="flex flex-col h-full my-4 md:mb-10">
                        <Input
                            type="text"
                            label="email"
                            name="email"
                            value={form?.data?.email ?? ''}
                            errors={form?.errors?.email}
                        />
                    </div>
                    <div class="flex justify-center mt-5">
                        <Button
                          label="NEXT"
                          htmlType="submit"
                          className="bg-secondary text-[14px] md:text-[16px] font-medium text-primary rounded-sm px-6 sm:px-14 py-2 hover:text-secondary hover:bg-primary"
                        />
                    </div>
                </form>
                <!-- {#if status}
                    <Loading desc="Loading" />
                    <p>Successfully logged in! Welcome back, {data?.user?.name}</p>
                {/if} -->
            </div>
    </div>
</main>