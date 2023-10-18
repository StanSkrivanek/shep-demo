/**
 * @param {HTMLDivElement} node
 * @param {{ (): boolean; (): void; }} runFunction
 */
function clickOutside(node, runFunction) {
   // const tocIcon = document.querySelector('.toc-icon__w');
   const handleClick = (/** @type {{ target: Node | null; }} */ event) => {
   if (!node.contains(event.target) )  {
      // console.log(event.target);
      
      if (runFunction) runFunction();
   }
};

// @ts-ignore
document.addEventListener('click', handleClick, true);
	return {
		destroy() {
			// @ts-ignore
			document.removeEventListener('click', handleClick, true);
		}
	};
}
export default clickOutside;