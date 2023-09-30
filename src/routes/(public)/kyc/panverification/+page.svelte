<!-- <script>
    import { goto } from '$app/navigation';
    import Button from "$lib/buttons/button.svelte";
    let panNumber = "";
    let errorMessage = "";

    const PANInputFields = [
      {
        name:"pan-digit-1",
        placeholder: "P",
        error: false,
        value: ""
      },
      {
        name:"pan-digit-2",
        placeholder: "A",
        error: false,
        value: ""
      },
      {
        name:"pan-digit-3",
        placeholder: "N",
        error: false,
        value: ""
      },
      {
        name:"pan-digit-4",
        placeholder: "N",
        error: false,
        value: ""
      },
      {
        name:"pan-digit-5",
        placeholder: "U",
        error: false,
        value: ""
      },
      {
        name:"pan-digit-6",
        placeholder: "M",
        error: false,
        value: ""
      },
      {
        name:"pan-digit-7",
        placeholder: "E",
        error: false,
        value: ""
      },
      {
        name:"pan-digit-8",
        placeholder: "R",
        error: false,
        value: ""
      },
      {
        name:"pan-digit-9",
        placeholder: "",
        error: false,
        value: ""
      },
      {
        name:"pan-digit-10",
        placeholder: "",
        error: false,
        value: ""
      },      
    ];

  
    function handleInput(event, fieldIndex) {
      const input = event.target;
      const value = input.value;
      const regex = /^[A-Z0-9]{1}$/;
    
      if (regex.test(value)) {
          PANInputFields[fieldIndex]["error"] = false;        
          errorMessage = "";
        if (input.nextElementSibling) {
          input.nextElementSibling.focus();
        }
        
      } else {
        PANInputFields[fieldIndex]["value"] = "";        
        PANInputFields[fieldIndex]["error"] = true;        
        errorMessage = "Invalid input. Please enter only uppercase letters or numbers.";
      }

      panNumber = PANInputFields.map(u => u.value).join('');
      console.log("panNumber : ", panNumber);
    }

    const handKeyDownEvent = (event) => {
      if (event.code === "Backspace") {
        panNumber = panNumber.slice(0, -1);
        return;
      }
    }
  
    function handleSubmit(e) {
      e.preventDefault();        
      if (panNumber.length === 10) {
        alert("Pan number is valid: " + panNumber);
        goto(e.target.getAttribute('href'));
      } else {        
        errorMessage = "Please enter a 10-digit Pan number.";
      }

    }
  </script>
  
  <style>
    .error {
      border-bottom: 4px solid red;
    }
  </style>
  
  <div class="mt-16">    
    <div class="flex gap-2">
        {#each PANInputFields as field, fieldIndex (field.name)}
          <input type="text" maxlength="1" name={field["name"]} bind:value={field["value"]} on:input={(e) => handleInput(e, fieldIndex)}  class:error={field["error"] || errorMessage} placeholder={field["placeholder"]} class="border-0 border-b-4 p-2 text-center border-primary focus:border-b-primary bg-primary-light focus:bg-input-light focus:ring-primary focus:border-0 focus:border-b-4 outline-none w-8 text-xs">
        {/each}
    </div>
    
    {#if errorMessage}
        <p class="text-red-500">{errorMessage}</p>
    {/if}
    
    <div class="mt-8 text-center">
        <Button label="Verify PAN" route="/public/kyc/adhaarverification" callback={handleSubmit}/>
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
	$: if (form?.success) {
		status = true;
		setTimeout(alertFunc, 1000);
	}
	const alertFunc = () => {
		status = false;
		goto('/public/kyc/adhaarverification');
	};
</script>

<Toaster />
<div class="mt-16">
	<form
		class="flex flex-col"
		method="POST"
		action="?/panVerify"
		use:enhance={() => {
			return async ({ result }) => {
				invalidateAll();
				await applyAction(result);
			};
		}}
	>
		<div class="flex flex-col h-full mt-5 w-[450px] absolute right-14">
			<OTP
				label="pan"
				name="pan"
				placeholder="PANNUMBER"
				value={form?.data?.pan ?? ''}
				errors={form?.errors?.pan}
			/>
		</div>

		<div class="mt-20 text-center relative">
			<Button label="Verify PAN" htmlType="submit" />
		</div>
	</form>
	{#if status}
		<Loading desc="Verifying PAN" />
	{/if}
</div>
