/**
 * @param {HTMLDivElement} node
 * @param {{ (): boolean; (): void; }} runFunction
 */
function clickOutside(node, runFunction) {
   const handleClick = (/** @type {{ target: Node | null; }} */ event) => {
   if (!node.contains(event.target) )  {
   
      
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