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
	const venue = await client.fetch(query, { slug });
	return venue;
};

// --- SHORT COURSES ---

// All Courses
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

// single course
export const getSingleCourse = async (/** @type {undefined} */ slug) => {
	const client = sanityClient();
	const query = `*[_type == "course" && slug.current == $slug][0]{
	 "id":_id,
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

// All UPCOMING Courses
export const getAllUpcomingCourses = async () => {
	const client = sanityClient();
	const allUpcomingCoursesQuery = `*[_type == "open_course" && is_active == true]{
	"id":_id,
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
  'sheet_url':  sheet_url,
}
`;

	const allUpcomingCourses = await client.fetch(allUpcomingCoursesQuery);
	return allUpcomingCourses;
};
// All UPCOMING Courses for current venue
export const getAllUpcomingCoursesforCurrentVenue = async (/** @type {undefined} */ slug) => {
	const client = sanityClient();
	const allUpcomingCoursesQuery = `*[_type == "open_course" && is_active == true && venue->slug.current == $slug]{
	"id":_id,
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
   'sheetUrl':  sheet_url,
 
}
`;

	const allUpcomingCoursesforCurrentVenue = await client.fetch(allUpcomingCoursesQuery, { slug });
	return allUpcomingCoursesforCurrentVenue;
};

// All UPCOMING Courses for current course
export const getAllUpcomingCoursesForCurrentCourse = async (/** @type {undefined} */ slug) => {
	const client = sanityClient();
	const allOpenCoursesQuery = `*[_type == "open_course" && course->slug.current == $slug && is_active == true]{
	"id":_id,
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
  'sheet_url':  sheet_url,
}
`;

	const allUpcomingCoursesForCurrentCourse = await client.fetch(allOpenCoursesQuery, { slug });
	return allUpcomingCoursesForCurrentCourse;
};

// --- INTENSIVE TRAININGS ---

// All Trainings

export const getAllTrainings = async () => {
	const client = sanityClient();
	const allTrainingsQuery = `*[_type == "training"]{
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

	const allTrainings = await client.fetch(allTrainingsQuery);
	return allTrainings;
};

//  single training
export const getSingleTraining = async (/** @type {undefined} */ slug) => {
	const client = sanityClient();
	const query = `*[_type == "training" && slug.current == $slug][0]{
	 "id":_id,
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
	 'sheet_url': sheet_url,
  }`;
	const training = await client.fetch(query, { slug });
	return training;
};

// All UPCOMING Trainings
export const getAllUpcomingTrainings = async () => {
	const client = sanityClient();
	// getting URL
	const allUpcomingTrainingsQuery = `*[_type == "open_training" && is_active == true]{
	"id":_id,
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
	'training': training {
		_type == 'reference' => @->{title, type, excerpt, slug}    
	},
		'venue': venue {
		_type == 'reference' => @->{venue_name, city, slug}    
	},

	'form': application_form {
		'asset': asset->url
  },
  'sheetUrl': sheet_url,

 
}
`;

	const allUpcomingTrainings = await client.fetch(allUpcomingTrainingsQuery);
	return allUpcomingTrainings;
};

// All UPCOMING Trainings for current venue
export const getAllUpcomingTrainingsforCurrentVenue = async (/** @type {undefined} */ slug) => {
	const client = sanityClient();
	const allUpcomingTrainingsQuery = `*[_type == "open_training" && is_active == true && venue->slug.current == $slug]{
	"id":_id,
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
	'training': training {
		_type == 'reference' => @->{title, type, form, in_person, online, slug}   
	},
		'venue': venue {
		_type == 'reference' => @->{venue_name, city, slug}    
	},

	'form': application_form {
		'asset': asset->url
  }, 
   'sheet_url': sheet_url,
}
`;

	const allUpcomingTrainings = await client.fetch(allUpcomingTrainingsQuery, { slug });
	return allUpcomingTrainings;
};

// All UPCOMING Trainings for current training
export const getAllUpcomingTrainingsForCurrentTraining = async (/** @type {undefined} */ slug) => {
	const client = sanityClient();
	const allUpcomingTrainingsForCurrentTrainingQuery = `*[_type == "open_training" && training->slug.current == $slug && is_active == true]{
	"id":_id,
	"ref" : ref_name,
	'in_person': in_person {
		...,
		'leader': training_leader[] {
		_type == 'reference' => @->{name}    
	},
	},
	'online': online {
		...,
		'leader': training_leader[] {
		_type == 'reference' => @->{name}    
		},
	},
	'training': training {
		_type == 'reference' => @->{title, type, excerpt, slug}    
	},
		'venue': venue {
		_type == 'reference' => @->{venue_name, city, slug}
	},

	'form': application_form {
		'asset': asset->url
  },
  'sheet_url': sheet_url,
}
`;

	const allOpenTrainingsForCurrentTraining = await client.fetch(
		allUpcomingTrainingsForCurrentTrainingQuery,
		{ slug }
	);
	return allOpenTrainingsForCurrentTraining;
};

// --- BLOG ---

// All Blog posts
export const getAllPosts = async () => {
	const client = sanityClient();
	const allPostsQuery = `*[_type == "post" && post_category->slug.current != "about-us"]{
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

export const getPostsForSlider = async () => {
	const client = sanityClient();
	const query = `*[_type == "post"][0...5]{
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

	const allPosts = await client.fetch(query);
	return allPosts;
};

//  get all posts from "about-us" category
export const getAboutUsPosts = async () => {
	const client = sanityClient();
	const query = `*[_type == "post" && post_category->slug.current == "about-us"]{
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

	const allPosts = await client.fetch(query);
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
};
// get all articles with same category but not the current article

export const getAllArticlesByCategory = async (/** @type {undefined} */ category_slug) => {
	const client = sanityClient();
	const query = `*[_type == "post" && post_category->slug.current == $category_slug]{
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

	let articlesByCategory = await client.fetch(query, { category_slug });
	return articlesByCategory;
};

// get 3 related articles by category
// sort by date publishedAt desc
export const getRelatedArticles = async (
	/** @type {undefined} */ slug,
	/** @type {undefined} */ category_slug
) => {
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
} | order(publishedAt desc)[0...3]`;

	let relatedArticles = await client.fetch(query, { slug, category_slug });
	return relatedArticles;
};

export const getAllCategories = async () => {
	const client = sanityClient();
	const query = `*[_type == "blogcategories" ]{
	"category": blog_category,
	"slug": slug.current,
}`;

	let allCategories = await client.fetch(query);
	return allCategories;
};

export const getLogos = async () => {
	const client = sanityClient();
	const query = `*[_type == "logoScroller" && is_featured == true]{
	"url": logo.asset->url,
	"title": name,
}`;

	let logos = await client.fetch(query);
	return logos;
};

// get team profiles
export const getTeam = async () => {
	const client = sanityClient();
	const query = `*[_type == "profile"]{
	"name": name,
	"slug": slug.current,
	"designation": designation,
	"intro": intro,
	"image": image.asset->url,
	"alt": image.alt,
	"bio": bio,
	"phone": phone,
	"email": email,
	"linkedin": linkedin,
	"twitter": twitter,
	"instagram": instagram,
	"facebook": facebook,

}`;

	let team = await client.fetch(query);
	return team;
};
