// @ts-nocheck
import { writable } from 'svelte/store';
import { v4 as uuid4 } from 'uuid';

const newToast = () => {
	const { update, subscribe } = writable([]);
	function send(msg) {
		const newMsg = { id: uuid4(), ...msg };
		update((store) => [...store, newMsg]);
		// Remove the toast after 3 seconds
		setTimeout(() => {
			remove(newMsg.id);
		}, 3000);
	}
	  function remove(id) {
	    update(store => {
	      if (id) return store.filter(item => item.id !== id)
	      const [_, ...rest] = store;
      console.log('🚀 ~ file: ToastStore.js:remove ~ rest:', ...rest)
	      return [...rest];
	    })
	  }

 

	return {
		subscribe,
		send,
		remove
	};
}
export const toast = newToast();

