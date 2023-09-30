<!-- <script>
    import { goto } from '$app/navigation';
    import Button from "$lib/buttons/button.svelte";
    
    let aadhaarNumber = "";
    let errorMessage = "";

    const inputFields = [
      {
        name:"aadhaar-digit-1",
        placeholder: "A",
        error: false,
        value: ""
      },
      {
        name:"aadhaar-digit-2",
        placeholder: "A",
        error: false,
        value: ""
      },
      {
        name:"aadhaar-digit-3",
        placeholder: "D",
        error: false,
        value: ""
      },
      {
        name:"aadhaar-digit-4",
        placeholder: "H",
        error: false,
        value: ""
      },
      {
        name:"aadhaar-digit-5",
        placeholder: "A",
        error: false,
        value: ""
      },
      {
        name:"aadhaar-digit-6",
        placeholder: "A",
        error: false,
        value: ""
      },
      {
        name:"aadhaar-digit-7",
        placeholder: "R",
        error: false,
        value: ""
      },
      {
        name:"aadhaar-digit-8",
        placeholder: "",
        error: false,
        value: ""
      },
      {
        name:"aadhaar-digit-9",
        placeholder: "",
        error: false,
        value: ""
      },
      {
        name:"aadhaar-digit-10",
        placeholder: "",
        error: false,
        value: ""
      },
      {
        name:"aadhaar-digit-11",
        placeholder: "",
        error: false,
        value: ""
      },
      {
        name:"aadhaar-digit-12",
        placeholder: "",
        error: false,
        value: ""
      }
    ];

    function handleInput(event, fieldIndex) {
      const input = event.target;
      const value = input.value;
      const regex = /^[0-9]{1}$/;

      if (regex.test(value)) {
        inputFields[fieldIndex]["error"] = false;              
        errorMessage = "";                
        if (input.nextElementSibling) {
          input.nextElementSibling.focus();
        }
      } else {        
        inputFields[fieldIndex]["value"] = "";        
        inputFields[fieldIndex]["error"] = true;        
        errorMessage = "Invalid input. Please enter only numbers.";
      }
      aadhaarNumber = inputFields.map(u => u.value).join('');
      console.log("Addhaar Number : ", aadhaarNumber);
    }
    
    function handleSubmit(e) {
      e.preventDefault();        
      if (aadhaarNumber.length === 12) {
        alert("Aadhaar number is valid: " + aadhaarNumber);
        goto(e.target.getAttribute('href'));
      } else {
        errorMessage = "Please enter a 12-digit Aadhaar number.";
      }
  
    }    
  </script>
  
  <style>
    .error {
      border-bottom: 4px solid red;
    }
  </style>
  
  <div class="mt-16 -ml-12">    
    <div class="flex gap-2">
      {#each inputFields as field, fieldIndex (field.name) }
        <input type="text" name={field["name"]} maxlength="1" bind:value={field["value"]} on:input={(e) => handleInput(e, fieldIndex)} class:error={field["error"] || errorMessage} placeholder={field["placeholder"]} class="text-xs border-0 border-b-4 border-primary focus:border-b-primary bg-primary-light focus:bg-input-light focus:ring-primary focus:border-0 focus:border-b-4 outline-none w-8 placeholder:text-xs">  
      {/each}
    </div>

    {#if errorMessage}
        <p class="text-red-500">{errorMessage}</p>
    {/if}
    
    <div class="mt-8 text-center">
        <Button label="Verify Adhaar" route="/dashboard/wallet/" callback={handleSubmit}/>
    </div>
</div>
   -->
<script>
	import { goto, invalidateAll } from '$app/navigation';
	import OTP from '$lib/components/form/OTP.svelte';
	import Button from '$lib/buttons/button.svelte';
	import Loading from '$lib/components/loading.svelte';
	import { applyAction, enhance } from '$app/forms';
	import toast, { Toaster } from 'svelte-french-toast';

	export let data;
	export let form;

	$: if (form?.message) {
		toast.error(form?.message, {
			position: 'top-right'
		});
	}
	$: status = false;
	$: if (form?.otpSuccess) {
		status = true;
		setTimeout(alertFunc, 1000);
	}
	const alertFunc = () => {
		status = false;
		goto('/public/authentication/signin');
	};
</script>

<Toaster />
<div class="mt-16">
	{#if form?.success}
		<form
			method="POST"
			action="?/aadharOTP"
			use:enhance={() => {
				return async ({ result }) => {
					invalidateAll();
					await applyAction(result);
				};
			}}
		>
			<div class="pt-4">
				<OTP
					label="OTP"
					name="otp"
					type="number"
					placeholder="123456"
					value={form?.data?.otp ?? ''}
					errors={form?.errors?.otp}
				/>
			</div>
			<div class="mt-4 self-center opacity-75 text-sm mb-1">
				Not received code yet ? <a
					href="/public/kyc/aadharverification"
					class="text-primary hover:underline"
					>Re-Send
				</a>
			</div>
			<Button label="Verify" htmlType="submit" />
		</form>
	{:else}
		<form
			class="flex flex-col"
			method="POST"
			action="?/aadharVerify"
			use:enhance={() => {
				return async ({ result }) => {
					invalidateAll();
					await applyAction(result);
				};
			}}
		>
			<div class="flex flex-col h-full mt-5 w-[450px] absolute right-14">
				<OTP
					label="aadhar"
					name="aadhar"
					type="number"
					placeholder="AADHARNUMBER"
					value={form?.data?.aadhar ?? ''}
					errors={form?.errors?.aadhar}
				/>
			</div>

			<div class="mt-20 text-center relative">
				<Button label="Verify Aadhar" htmlType="submit" />
			</div>
		</form>
	{/if}
	{#if status}
		<Loading desc="Verifying Aadhar" />
	{/if}
</div>
