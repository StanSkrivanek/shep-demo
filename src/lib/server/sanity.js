import { env } from '$env/dynamic/private';
import { createClient } from '@sanity/client';

function sanityClient() {
	const config = {
		projectId: env.SANITY_PROJECT_ID,
		dataset: env.SANITY_PROJECT_DATASET,
		apiVersion: '2021-10-21'
		// useCdn: true,
		// token: env.SANITY_TOKEN,
	};
	return createClient({ ...config });
}

export const getAllVenues = async () => {
	const client = sanityClient();
	const allVenuesQuery = `*[_type == "venue"]{
    "id": _id,
    venue_name,
    "slug": slug.current,
	 city,
	 address_1,
	 address_2,
	 eircode,
	 phone,
	 email,
	 website,
	 excerpt,
	 "logo": logo.asset->url,
	 "main_img": main_image.asset->url,
	  "content": content[] {
		...,
    _type == "image" => {
        ...,
        "asset": asset->
      } 
    }
  }`;

	const allVenues = await client.fetch(allVenuesQuery);
	return allVenues;
};

export const getAllCourses = async () => {
	const client = sanityClient();
	const allCoursesQuery = `*[_type == "course"]{
	 "id": _id,
	 title,
	 "slug": slug.current,
	 excerpt,
	 type,
	 "main_img": main_image.asset->url,
	 "content": content[] {
		...,
	 _type == "image" => {
		  ...,
		  "asset": asset->
		} 
	 }
  }`;

	const allCourses = await client.fetch(allCoursesQuery);
	return allCourses;
}

export const getSingleCourse = async (/** @type {undefined} */ slug) => {
	const client = sanityClient();
	const query = `*[_type == "course" && slug.current == $slug][0]{
	 _id,
	 title,
	 "slug": slug.current,
	 type,
	 full_price,
	 funded_price,
	 excerpt,
	 "main_img": image.asset->url,
	 "content": content[] {
		...,
	 _type == "image" => {
		  ...,
		  "asset": asset->
		} 
	 },
	 "brochure": brochure.asset->url,
  }`;
	const course = await client.fetch(query, { slug });
	return course;
}

export const getAllOpenCouses = async () => {
	const client = sanityClient();
	const allOpenCoursesQuery = `*[_type == "open_course" && is_active == true]{
	_id,
	'in_person': in_person {
		...,
				'leader': course_leader[] {
		_type == 'reference' => @->{name}    
	},
	},
	'online': online {
		...,
		'leader': course_leader[] {
		_type == 'reference' => @->{name}    
		},
	},
	'course': course {
		_type == 'reference' => @->{title, type, excerpt, slug}    
	},
		'venue': venue {
		_type == 'reference' => @->{venue_name, city}    
	},

   'form': application_form {
      'asset': asset->url
  },
 
}
`;

	const allOpenCourses = await client.fetch(allOpenCoursesQuery);
	return allOpenCourses;
};
