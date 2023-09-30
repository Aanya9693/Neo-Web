<script>
	import { applyAction, enhance } from '$app/forms';
	import { goto, invalidateAll } from '$app/navigation';
	import Modal from '$lib/components/modal.svelte';
	import Button from '../../../../lib/buttons/button.svelte';

	let photo = true;
	let loading = false;

	export let form;
	export let data;
	const { user } = data;

	let selectedImage = null;
	let file = null;

	const handleImageChange = async (e) => {
		try {
			let file = e.target.files[0];
			let reader = new FileReader();

			const formData = new FormData();
			formData.append('avatar', file);

			const options = {
				method: 'POST',
				body: formData
			};

			const response = await fetch(`/dashboard/manage/photo`, options);

			const result = await response.json();
			if (result?.status_code === 200) {
				console.log('image uploaded');
			} else {
				console.log('image upload failed');
			}
		} catch (error) {
			console.error('An error occurred:', error);
			// Handle the error gracefully, show a message to the user, or take appropriate actions.
			// For example, you could set an error state to display a user-friendly message.
			// $showError = true;
			// $errorMessage = "An error occurred while uploading the image.";
			// hideError();
		}
	};

	function handleUploadClick() {
		const uploadInput = document.getElementById('imageUpload');
		uploadInput.click();
	}
</script>

<div class="w-full min-h-screen">
	<Modal>
		{#if photo}
			<div class="py-6 px-32">
				<h1 class="text-center text-base font-semibold leading-[24px]">change profile</h1>
				<div class="flex space-x-3 relative justify-center">
					<img
						src={user?.image_url || '/dashboard/cameraProfile.svg'}
						alt="cameraProfile"
						class="w-28 h-28 bg-black rounded-full"
					/>
					<button on:click={() => (photo = false)} class="bottom-0 right-20 absolute">
						<img src="/dashboard/camera.svg" alt="camera" class="w-7 h-7" />
					</button>
				</div>
				<div class="grid grid-cols-3 gap-10 mt-16">
					<img src="/dashboard/camera.svg" alt="camera" class="w-10 ml-2" />
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<img
						src="/dashboard/upload.svg"
						alt="uploads"
						class="w-6 ml-5 cursor-pointer"
						on:click={handleUploadClick}
					/>
					<img src="/dashboard/trash.svg" alt="trash" class="w-6 ml-5" />
				</div>
				<div class="grid grid-cols-3 gap-10 mb-6">
					<div class="font-normal text-[10px] leading-[12px]">Take Photo</div>

					<form id="upload-avatar-form" class="font-normal text-[10px] leading-[12px]">
						<label for="imageUpload" class="cursor-pointer">
							Upload Photo
							<input
								type="file"
								name="file"
								id="imageUpload"
								class="hidden"
								accept="image/*"
								on:change={handleImageChange}
							/>
						</label>
					</form>
					<div class="font-normal text-[10px] leading-[12px]">Remove Photo</div>
				</div>
			</div>
		{:else}
			<div class="py-20 px-40 bg-[#d9d9d9bf] relative">
				<button class="-bottom-5 right-[43%] absolute">
					<img src="/dashboard/camera.svg" alt="cam1" class="w-12 h-12" />
				</button>
			</div>
		{/if}
	</Modal>
</div>
