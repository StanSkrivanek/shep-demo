import {
	getPublicationsPDFs,
	getAnnualReports,
	getFinancialReports,
	getIndependentReports
} from '$lib/server/sanity';

export async function load() {
	const allPublications = await getPublicationsPDFs();

	const annual = await getAnnualReports();
	const financial = await getFinancialReports();
	const independent = await getIndependentReports();
	console.log("🚀 ~ load ~ independent:", ...independent)

	// const annual = allPublications[0].publications.filter((/** @type {{ tags: string | string[]; }} */ pdf) => pdf.tags.includes('annual'));


	return {
		pdfs: {
			allPublications,
			annual,
			financial,
			independent
		}
	};
}
