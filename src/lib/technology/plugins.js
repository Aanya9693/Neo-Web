export const plugins = [
	{
		typeName: 'Token and Smart Contracts',
		typeDesc: 'Enjoy seamless token & contract integration with plugins.',
		typeIcon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 6H14C16 6 16 5 16 4C16 2 15 2 14 2H10C9 2 8 2 8 4C8 6 9 6 10 6Z" stroke="#07E1E8" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 22H9C4 22 3 20 3 16V10C3 5.44002 4.67 4.20002 8 4.02002" stroke="#07E1E8" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 4.02002C19.33 4.20002 21 5.43002 21 10V15" stroke="#07E1E8" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 19V16H18" stroke="#07E1E8" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21 22L15.04 16.04" stroke="#07E1E8" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 13.1676C10 13.8142 10.5 14.3342 11.1133 14.3342H12.3667C12.9 14.3342 13.3333 13.8809 13.3333 13.3142C13.3333 12.7076 13.0667 12.4876 12.6733 12.3476L10.6667 11.6476C10.2733 11.5076 10.0067 11.2942 10.0067 10.6809C10.0067 10.1209 10.44 9.66089 10.9733 9.66089H12.2267C12.84 9.66089 13.34 10.1809 13.34 10.8276" stroke="#07E1E8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.666 9V15" stroke="#07E1E8" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
		bgImage: `<svg width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
<path id="shape-25" opacity="0.15" d="M51 10V-40L76 -40L101 -15L76 10M51 10H76M51 10L51 60H26L1 35L26 10M51 10H26M76 10L51 35L76 60H101V10H76ZM26 10H1L1 -40H26L51 -15L26 10Z" stroke="#112D44"/>
</svg>`,
		items: [
			{
				logo: `assetyzer.svg`
			},
			{
				// logo: `timechainlabs.svg`,
				html: `TIMECHAIN <br/> STUDIO`
			},
			{
				logo: 'contractstore.svg'
			}
		]
	},
	{
		typeName: 'Developer Plugins',
		typeDesc: 'Unleash creativity streamlined with powerful plugins',
		typeIcon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 10L6 12L8 14" stroke="#07E1E8" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 10L18 12L16 14" stroke="#07E1E8" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#07E1E8" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13 9.66992L11 14.33" stroke="#07E1E8" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
		bgImage: `<svg xmlns="http://www.w3.org/2000/svg" width="62" height="62" viewBox="0 0 62 62" fill="none">
		<g opacity="0.15">
		  <path d="M68.6667 60H102V26.6667H68.6667V60Z" stroke="#112D44"/>
		  <path d="M35.3333 26.6667V60L102 -6.66667H68.6667V-40L2 26.6667H35.3333Z" stroke="#112D44"/>
		  <path d="M2 -6.66667H35.3333V-40H2V-6.66667Z" stroke="#112D44"/>
		</g>
	  </svg>`,
		items: [
			{
				logo: `metabuilder.svg`
			},
			{
				logo: `zapier.svg`
			},
			{
				logo: `bubble.svg`
			},
			{
				logo: `timetrace.svg`
			}
		]
	},
	{
		typeName: 'Business Plugins',
		typeDesc: 'Plugins designed to propel your enterprise to new heights.',
		typeIcon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="#07E1E8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.5 18.5C16.6 18.5 17.5 17.6 17.5 16.5V7.5C17.5 6.4 16.6 5.5 15.5 5.5C14.4 5.5 13.5 6.4 13.5 7.5V16.5C13.5 17.6 14.39 18.5 15.5 18.5Z" stroke="#07E1E8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.5 18.5C9.6 18.5 10.5 17.6 10.5 16.5V13C10.5 11.9 9.6 11 8.5 11C7.4 11 6.5 11.9 6.5 13V16.5C6.5 17.6 7.39 18.5 8.5 18.5Z" stroke="#07E1E8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
		bgImage: `<svg xmlns="http://www.w3.org/2000/svg" width="61" height="61" viewBox="0 0 61 61" fill="none">
		<path opacity="0.15" d="M67.6667 -23.3333H84.3333V-6.66667M67.6667 -23.3333V-6.66667H84.3333M67.6667 -23.3333L51 -6.66667L34.3333 -23.3333M67.6667 -23.3333L51 -40L34.3333 -23.3333M84.3333 -6.66667L101 10L84.3333 26.6667M84.3333 -6.66667L67.6667 10L84.3333 26.6667M84.3333 26.6667H67.6667V43.3333M84.3333 26.6667V43.3333H67.6667M67.6667 43.3333L51 60L34.3333 43.3333M67.6667 43.3333L51 26.6667L34.3333 43.3333M34.3333 43.3333V26.6667H17.6667M34.3333 43.3333H17.6667V26.6667M17.6667 26.6667L1 10L17.6667 -6.66667M17.6667 26.6667L34.3333 10L17.6667 -6.66667M17.6667 -6.66667H34.3333V-23.3333M17.6667 -6.66667V-23.3333H34.3333" stroke="#112D44"/>
	  </svg>`,
		items: [
			{
				logo: `salesforce.svg`
			},
			{
				logo: `oracle.svg`
			},
			{
				logo: `payauth.svg`
			},
			{
				logo: `metanet.svg`
			},
			{
				logo: `ordinalwidget.svg`
			},
			{
				logo: `paymail.svg`
			}
		]
	},
	{
		typeName: 'Financial Plugins',
		typeDesc: 'Plugins designed to enhance the way you manage your finances.',
		typeIcon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.67188 14.3298C8.67188 15.6198 9.66188 16.6598 10.8919 16.6598H13.4019C14.4719 16.6598 15.3419 15.7498 15.3419 14.6298C15.3419 13.4098 14.8119 12.9798 14.0219 12.6998L9.99187 11.2998C9.20187 11.0198 8.67188 10.5898 8.67188 9.36984C8.67188 8.24984 9.54187 7.33984 10.6119 7.33984H13.1219C14.3519 7.33984 15.3419 8.37984 15.3419 9.66984" stroke="#07E1E8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 6V18" stroke="#07E1E8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#07E1E8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
		bgImage: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="61" viewBox="0 0 48 61" fill="none">
		<path opacity="0.15" d="M73.9167 10L59.3333 1.66667V-15M73.9167 10L88.5 1.66667V-15L73.9167 -23.3333L59.3333 -15M73.9167 10L88.5 18.3333V35L73.9167 43.3333L59.3333 35M73.9167 10L59.3333 18.3333V35M59.3333 -15L44.75 -6.66667L30.1667 -15M59.3333 -15V-31.6667L44.75 -40L30.1667 -31.6667V-15M59.3333 35V51.6667L44.75 60L30.1667 51.6667V35M59.3333 35L44.75 26.6667L30.1667 35M30.1667 35L15.5833 43.3333L1 35V18.3333L15.5833 10M30.1667 35V18.3333L15.5833 10M15.5833 10L1 1.66667V-15L15.5833 -23.3333L30.1667 -15M15.5833 10L30.1667 1.66667V-15" stroke="#112D44"/>
	  </svg>`,
		items: [
			{
				logo: `manthandex.svg`
			},
			{
				logo: `tally.svg`
			},
			{
				// logo: `timechainwidger.svg`
				html: `TIMECHAIN <br/> BRIDGE`
			},
			{
				// logo: `zohobooks.svg`
				html: `ZOHO <br/> BOOKS`
			}
		]
	},
	{
		typeName: 'Payment Plugins',
		typeDesc: 'Easy integration which enables accept payments effortlessly.',
		typeIcon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.5 13.75C9.5 14.72 10.25 15.5 11.17 15.5H13.05C13.85 15.5 14.5 14.82 14.5 13.97C14.5 13.06 14.1 12.73 13.51 12.52L10.5 11.47C9.91 11.26 9.51001 10.94 9.51001 10.02C9.51001 9.17999 10.16 8.48999 10.96 8.48999H12.84C13.76 8.48999 14.51 9.26999 14.51 10.24" stroke="#07E1E8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 7.5V16.5" stroke="#07E1E8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2" stroke="#07E1E8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 6V2H18" stroke="#07E1E8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17 7L22 2" stroke="#07E1E8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
		bgImage: `<svg xmlns="http://www.w3.org/2000/svg" width="61" height="61" viewBox="0 0 61 61" fill="none">
		<path opacity="0.15" d="M51 10V-40L76 -40L101 -15L76 10M51 10H76M51 10L51 60H26L1 35L26 10M51 10H26M76 10L51 35L76 60H101V10H76ZM26 10H1L1 -40H26L51 -15L26 10Z" stroke="#112D44"/>
	  </svg>`,
		items: [
			{
				logo: `neucronpay.svg`
			},
			{
				logo: `metalogue.svg`
			},
			{
				logo: `neuronwordpress.svg`
			}
		]
	},
// 	{
// 		typeName: 'Application Plugins',
// 		typeDesc: 'Elevate your applications to new heights with Neucron',
// 		typeIcon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path d="M8.92969 2L8.95969 3.53003C8.97969 4.34003 9.64969 5 10.4597 5H13.4797C14.3097 5 14.9797 4.32 14.9797 3.5V2" stroke="#07E1E8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
// <path d="M17 17L15 19L17 21" stroke="#07E1E8" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
// <path d="M20 17L22 19L20 21" stroke="#07E1E8" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
// <path d="M13 22H8C4.5 22 3 20 3 17V7C3 4 4.5 2 8 2H16C19.5 2 21 4 21 7V14" stroke="#07E1E8" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
// </svg>
// `,
// 		bgImage: `<svg xmlns="http://www.w3.org/2000/svg" width="61" height="61" viewBox="0 0 61 61" fill="none">
// 		<path opacity="0.15" d="M67.6667 26.6667V60H101V26.6667H67.6667ZM67.6667 26.6667L101 -6.66667V-40H67.6667L34.3333 -6.66667M67.6667 26.6667V-6.66667H34.3333M67.6667 26.6667L34.3333 60H1V26.6667L34.3333 -6.66667M67.6667 26.6667H34.3333V-6.66667M34.3333 -6.66667H1V-40H34.3333V-6.66667Z" stroke="#112D44"/>
// 	  </svg>`,
// 		items: [
// 			{
// 				logo: `crowdcompose.svg`
// 			},
// 			{
// 				logo: `btcdocformat.svg`
// 			},
// 			{
// 				logo: `ultraforms.svg`
// 			},
// 			{
// 				logo: `bdfs.svg`
// 			},
// 			{
// 				logo: `anokha.svg`
// 			},
// 			{
// 				// logo: `aquarius.svg`
// 				html: `AQUARIUS`
// 			},
// 			{
// 				logo: `microcredentials.svg`
// 			},
// 			{
// 				// logo: `bitpage.svg`
// 				html: `BITPAGE`
// 			},
// 			{
// 				// logo: `todoist.svg`
// 				html: `TODOLIST`
// 			},
// 			{
// 				logo: `disboard.svg`
// 			},
// 			{
// 				logo: `bitblogger.svg`
// 			},
// 			{
// 				// logo: `reorg.svg`
// 				html: `REORG`
// 			},
// 			{
// 				// logo: `eventbase.svg`
// 				html: `EVENTBASE`
// 			},
// 			{
// 				logo: `crowdcompute.svg`
// 			},
// 			{
// 				logo: `crysta.svg`
// 			},
// 			{
// 				logo: `devboard.svg`
// 			}
// 		]
// 	}
];
