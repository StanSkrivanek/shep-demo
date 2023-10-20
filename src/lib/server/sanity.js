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
// Venues
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
	 "image": main_img.asset->url,
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

export const getSingleVenue = async (/** @type {undefined} */ slug) => {
	const client = sanityClient();
	const query = `*[_type == "venue" && slug.current == $slug][0]{
	 _id,
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
	 "image": main_img.asset->url,
	  "content": content[] {
		...,
	 _type == "image" => {
		  ...,
		  "asset": asset->
		} 
	 }
  }`;
	const venue = await client.fetch(query, { slug });
	return venue;
};

// Courses
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
};

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
};

export const getAllOpenCoursesforCurrentVenue = async (/** @type {undefined} */ slug) => {
	const client = sanityClient();
	const allOpenCoursesQuery = `*[_type == "open_course" && is_active == true && venue->slug.current == $slug]{
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
		_type == 'reference' => @->{title, type, form, in_person, online, slug}   
	},
		'venue': venue {
		_type == 'reference' => @->{venue_name, city, slug}    
	},

	'form': application_form {
		'asset': asset->url
  },
 
}
`;

	const allOpenCourses = await client.fetch(allOpenCoursesQuery, { slug });
	return allOpenCourses;
};

// Open Courses
export const getAllOpenCourses = async () => {
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
		_type == 'reference' => @->{venue_name, city, slug}    
	},

   'form': application_form {
      'asset': asset->url
  },
 
}
`;

	const allOpenCourses = await client.fetch(allOpenCoursesQuery);
	return allOpenCourses;
};

export const getAllOpenCoursesForCurrentCourse = async (/** @type {undefined} */ slug) => {
	const client = sanityClient();
	const allOpenCoursesQuery = `*[_type == "open_course" && course->slug.current == $slug && is_active == true]{
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
		_type == 'reference' => @->{venue_name, city, slug}    
	},

	'form': application_form {
		'asset': asset->url
  },
 
}
`;

	const getAllOpenCoursesForCurrentCourse = await client.fetch(allOpenCoursesQuery, { slug });
	return getAllOpenCoursesForCurrentCourse;
};

// Blog posts
export const getAllPosts = async () => {
	const client = sanityClient();
	const allPostsQuery = `*[_type == "post"]{
		"title": article_title,
	"excerpt": post_excerpt,
	"slug": slug.current,
	"main_img": hero_image.asset->url,
	"category": post_category->blog_category,
  	"category_slug": post_category->slug.current,
	"author": post_author[] {
		_type == 'reference' => @->{name}    
        },
	"content": post_body[] {
		...,
		_type == "image" => {
			...,
			"asset": asset->
		}
	}
}`;

	const allPosts = await client.fetch(allPostsQuery);
	return allPosts;
};

// Single Article
export const getSingleArticle = async (/** @type {undefined} */ id) => {
	// 772b1b99-4d2e-4e21-8029-89be6fb6294b
	const client = sanityClient();
	const query = `*[_type == "post" && _id == $id][0]{
	...,
	"content": post_body[] {
		...,
		_type == "image" => {
			...,
			"asset": asset->
		}
	},
	"toc_headings": post_body[style == "h2" || style == "h3"] {
		"key": _key,
  		"style": style,
  		'title': children[0].text
	}
}`;

	const article = await client.fetch(query, { id });
	return article;
};

export const getArticleBySlug = async (/** @type {undefined} */ slug) => {
	const client = sanityClient();
	const query = `*[_type == "post" && slug.current == $slug ][0]{
	"title": article_title,
	"excerpt": post_excerpt,
	"slug": slug.current,
	"main_img": hero_image.asset->url,
	"category": post_category->blog_category,
  	"category_slug": post_category->slug.current,
	"author": post_author[] {
		_type == 'reference' => @->{name}    
        },
	"content": post_body[] {
		...,
		_type == "image" => {
			...,
			"asset": asset->
		}
	},
	"toc_headings": post_body[style == "h2" || style == "h3"] {
		"key": _key,
  		"style": style,
  		'title': children[0].text
	}
}`;

	const article = await client.fetch(query, { slug });
	return article;
}
// get all articles with same category but not the current article

export const getAllArticlesByCategory = async (/** @type {undefined} */ category_slug, /** @type {undefined} */ slug) => {
	const client = sanityClient();
	const query = `*[_type == "post" && slug.current != $slug && post_category->slug.current == $category_slug]{
	"title": article_title,
	"excerpt": post_excerpt,
	"slug": slug.current,
	"main_img": hero_image.asset->url,
	"category": post_category->blog_category,
  	"category_slug": post_category->slug.current,
	"author": post_author[] {
		_type == 'reference' => @->{name}    
		  },
}`;

	const articles = await client.fetch(query, { category_slug, slug });
	return articles;
};


// export const getAllArticlesByCategory = async (/** @type {undefined} */ slug) => {
// 	const client = sanityClient();
// 	const query = `*[_type == "post" && post_category->slug.current == $slug && slug.current != $slug]{
// 	"title": article_title,
// 	"excerpt": post_excerpt,
// 	"slug": slug.current,
// 	"main_img": hero_image.asset->url,
// 	"category": post_category->blog_category,
//   	"category_slug": post_category->slug.current,
// 	"author": post_author[] {
// 		_type == 'reference' => @->{name}    
// 		  },
// 	"content": post_body[] {
// 		...,
// 		_type == "image" => {
// 			...,
// 			"asset": asset->
// 		}
// 	}
// }`;

// 	const articles = await client.fetch(query, { slug });
// 	return articles;
// }


// (/** @type {undefined} */ slug) => {
// 	const client = sanityClient();
// 	const query = `*[_type == "post" && slug.current == $slug][0]{
// 	...,
// 	"content": post_body[] {
// 		...,
// 		_type == "image" => {
// 			...,
// 			"asset": asset->
// 		}
// 	},
// 	"toc_headings": post_body[style == "h2" || style == "h3"] {
// 		"key": _key,
//   		"style": style,
//   		'title': children[0].text
// 	}
// }`;

// 	const article = await client.fetch(query, { slug });
// 	return article;
// }