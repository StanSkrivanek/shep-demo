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

	return {
		pdfs: {
			allPublications,
			annual,
			financial,
			independent
		}
	};
}
