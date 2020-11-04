const places = [
	{
		html_attributions: [],
		result: {
			formatted_phone_number: '628 77 35 08',
			name: 'Rafting Catalunya',
			photos: [
				{
					height: 628,
					html_attributions: [
						'<a href="https://maps.google.com/maps/contrib/106810522241972295750">Rafting Catalunya</a>'
					],
					photo_reference:
						'CmRZAAAAbjsuc9LE05RPnZBqKGJKifMfqta6m8o0FvyErYtoEo1kNTL7s9BECl9wEhLp6g9PIl2tAID4SfRh_615bqMNx7yCY7cUEeQmuhsZZk76Fgd5ty1oZUBC9n7NZ769AmVyEhCT9nu4nhgfllGZa65B3MbEGhQ7fa9D_-E55L3JH7CYs4SClESqbA',
					width: 1200
				},
				{
					height: 3072,
					html_attributions: [
						'<a href="https://maps.google.com/maps/contrib/106810522241972295750">Rafting Catalunya</a>'
					],
					photo_reference:
						'CmRZAAAA0lZlYQKjpErTTiuiL8dvgUzoGOtCJPkdeuwnpzbGNfiy38_3eAntOlZizOSqS3od0g7UqyCFhHwHNEzeOzjF7peiWLrV6Rw03_YQr9JHAeCT114hp8YHuKKZDb7ytp4uEhCFxORfUeIIHr3-d-nBvkVmGhQ4aaQQj9ls5HMqvZf4bbcr1lx2_Q',
					width: 4608
				},
				{
					height: 3072,
					html_attributions: [
						'<a href="https://maps.google.com/maps/contrib/106810522241972295750">Rafting Catalunya</a>'
					],
					photo_reference:
						'CmRZAAAAYMntY_C1D4xGmF90eyBJH2DX8_o2vDCSzVefBAxXftHi_5wBgxNxxk4tM8n1ZjlvEgqhK7GJYZIsBFD-oNxThZ0-VFqs8v0OtewzhZR9pkeJ70qzz7Y91T7AVybUcRsAEhDEVfwipP3e1LW6ix27fUkuGhReyvyyStxb6RwI4j5IqKj-kfY5bQ',
					width: 4608
				},
				{
					height: 3072,
					html_attributions: [
						'<a href="https://maps.google.com/maps/contrib/106810522241972295750">Rafting Catalunya</a>'
					],
					photo_reference:
						'CmRZAAAAK3X_fQQ8ZfvIQFRz4A_YZUrbh999ixblsUV7SU4ZzV-_N9Quey0WVu45Z44fN2SSZ6k7LFTyn5jimaKcJwyYCwcg1xwyRZo5B-WghzRFshGkrD25CE4EYov4ZKSMJJmDEhCKoUxpKfTIbtVHvx4B86-wGhSsCpTMs0QKtCyiJzM0SQy1DBMXng',
					width: 4608
				},
				{
					height: 2336,
					html_attributions: [
						'<a href="https://maps.google.com/maps/contrib/104432731126174510736">Manuel Cazorla</a>'
					],
					photo_reference:
						'CmRaAAAA0OJKK4ZKOx4rQKq5t2bBsm1f5J1Pz4-8zwFse2Z4Paaesq7BnIBv8kG9vnpLg4U5cis2v_znDjjz524RuHx9fe8bpYJUJMQIvuOf7CV6ObBsaCssfuG8qlOI-8eLpZguEhAdgdvo15-VGQrJURi_sV5kGhS3LxNJbCNT8WaEVLcXCNyjomQH6A',
					width: 4160
				},
				{
					height: 3024,
					html_attributions: [
						'<a href="https://maps.google.com/maps/contrib/108328195071982334476">ABEL SAEZ</a>'
					],
					photo_reference:
						'CmRaAAAAFnDsfYI8EvpfrRjv-Y9_yIXfmMKm0P9kKjpp6XmE14eAcq644VvmFTpcn0xtjvKOZPOHRqoOhxRcDYXYWCfxt3d-pYfeZpWXDsmNIebBqWsbWXdzoRYttN3VVze0gfrYEhC3V7y9-rZgYZoaj4RGdqWRGhSYV0Mm7o9GvpR-y1316BI8gNjEGQ',
					width: 4032
				},
				{
					height: 3000,
					html_attributions: [
						'<a href="https://maps.google.com/maps/contrib/100893090552438561956">Laura Arla Romero</a>'
					],
					photo_reference:
						'CmRaAAAAPGokpCvQuYAlDfMnA1cj3Dz47ilBQSvWqRS-rZlfL7UBizeJ0mBZ1k1EpilDyYdUJ7sREgPSEL7td5PlVjzXydupkHAthg3KY0IEk_n6gftKxqpX4isLdaZkYKNFN3qcEhB3BYw7fllXa1QV6oMTv9sIGhQVa-2_Mynv8bWsh7lyqxTfIVl7Hw',
					width: 4000
				},
				{
					height: 4000,
					html_attributions: [
						'<a href="https://maps.google.com/maps/contrib/100881974086260768571">Javi Garcia</a>'
					],
					photo_reference:
						'CmRaAAAAdlCC4SSRVY9wzp2JdDwJjtTfiE-VfJSPD8mOuJHMirtTb0eRwT0ekAj7OshJIJVUKV08sTtj8ZEcGXBzJzQIJemvOQ1inFn7sqqvI3gfW1sxrAUiCLcRNkic0rqVEfn0EhBt6wZw1X1yFs95xVrMz8W9GhQjrWB7ZpylSikoWxKTR9rHaOZbug',
					width: 3000
				},
				{
					height: 3024,
					html_attributions: [
						'<a href="https://maps.google.com/maps/contrib/108328195071982334476">ABEL SAEZ</a>'
					],
					photo_reference:
						'CmRaAAAA_AnQbW3kwzFCex6JlNShRKPRaUdOhbcvZ3T3QeZb9WfzYzGAJCng1ucaLK8r3-NQ5gnCKIpwNYnomVdMEsWQYh3vvcMvTLkMpi63Sl-RatHhwCkJt7qh3w-pwjbIO9L3EhDE5csu7-esmZBlbUDnmeavGhRTTlNLDo8CtWiooUHwAjXIaOPSGA',
					width: 4032
				},
				{
					height: 3120,
					html_attributions: [
						'<a href="https://maps.google.com/maps/contrib/102323371518084744172">Josemanuel Lopez Perez</a>'
					],
					photo_reference:
						'CmRaAAAA6bUvTUweIb7IFAL1RXyyiwqkl7fJzocZ7Y-nq1ocrYO0SGCl-nFL6vXuk9-Sz7OpoXgPlDoiYDyjn2bIlSHuIA9DdGvt8WFm8CTaJwqxNXkTpP7CDVF53SlQ9XBRXGE1EhDRUcAfKZmTP2UiV98jtaJqGhQn_GZF9mD48g6jJ7_Fv9rEUATc5w',
					width: 4160
				}
			],
			rating: 4.8,
			reviews: [
				{
					author_name: 'Marcin Górny',
					author_url:
						'https://www.google.com/maps/contrib/105893604887847206618/reviews',
					language: 'en',
					profile_photo_url:
						'https://lh6.googleusercontent.com/-nF5y3DEoUz0/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucl2AqkZSxxQDUjYY1cVeZF47W7iDQ/s128-c0x00000000-cc-rp-mo-ba3/photo.jpg',
					rating: 5,
					relative_time_description: '3 months ago',
					text:
						'As a small group of 3 people we were teamed up with another 2 and had an amazing time, lead by Alfonso in Inferno Canyon. He is an extremely professional guide and I felt secure following his advice. The canyon was great for beginners with a decent level of physical fitness and willingness to overcome some fears. I would totally repeat barranquismo in another canyon there.',
					time: 1596095379
				},
				{
					author_name: 'Busra Savli',
					author_url:
						'https://www.google.com/maps/contrib/105052151325237184833/reviews',
					language: 'en',
					profile_photo_url:
						'https://lh3.googleusercontent.com/a-/AOh14GiH-LSCY1S03pSa1POX-7Tugexa2_46urXKJoBl=s128-c0x00000000-cc-rp-mo',
					rating: 5,
					relative_time_description: 'a year ago',
					text:
						'As Blu Selection, we had an amazing team building event with Rafting Catalunya. We felt really safe and most importantly, had a lot of fun.\n\nThey first gave us every single detail regarding security and as we felt more expert, the level of entertainment went up higher. The nature surrounding is amazing and since we had ours in early July water was not cold but really refreshing.\n\nBig thanks to our lovely guide, Miguel, for his clear instructions and making rafting even more entertaining than it already is.',
					time: 1562576375
				},
				{
					author_name: 'Benos Shregger',
					author_url:
						'https://www.google.com/maps/contrib/102367268580429247769/reviews',
					language: 'en',
					profile_photo_url:
						'https://lh3.googleusercontent.com/a-/AOh14GiCaBezZyJk8fj5h1djMly89EhtZdceqyvYT6mDmg=s128-c0x00000000-cc-rp-mo-ba3',
					rating: 5,
					relative_time_description: 'a year ago',
					text:
						'Had a really fun time rafting with rafting Catalunya. The tour guide was fun and stopped us so we could jump of cliffs, swim and float in the river. We also got to see land marks and stop in small caves. When you go with this company you get nice surprises 👌 and very nice tour guides.',
					time: 1563802028
				},
				{
					author_name: 'Alina Iurina',
					author_url:
						'https://www.google.com/maps/contrib/109354764657856478819/reviews',
					language: 'en',
					profile_photo_url:
						'https://lh3.googleusercontent.com/a-/AOh14GjIFLxtLxOga_DCrl9Y72imSc7cuZJOFug-th1Vbg=s128-c0x00000000-cc-rp-mo',
					rating: 5,
					relative_time_description: 'a year ago',
					text:
						'Amazing rafting company, I didn’t except to have so much fan, Edu is a cool guide, we enjoyed a lot 😊',
					time: 1565981096
				},
				{
					author_name: 'D',
					author_url:
						'https://www.google.com/maps/contrib/110521947103720444405/reviews',
					language: 'en',
					profile_photo_url:
						'https://lh3.googleusercontent.com/a-/AOh14Gg9RiY5twfPxc9iZeCKO_eM819xyKnk-xttm7E-Lvs=s128-c0x00000000-cc-rp-mo-ba3',
					rating: 5,
					relative_time_description: 'a year ago',
					text:
						'Professional, entertaining and friendly staff. Fantastic experience all round!! English speaking',
					time: 1562441630
				}
			]
		}
	}
];
