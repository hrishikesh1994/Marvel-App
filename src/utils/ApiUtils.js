import CryptoJS from "react-native-crypto-js";

export const PRIVATE_KEY = '0bd6475dac62fe3feead977324684441e7b97d3e'
export const PUBLIC_KEY = '15ed955e6c7f921fbf9af8f079d41b3f'

export async function callMarvel(url) {
  let requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

  let {hash, apiKey, timestamp} = generateHash()

	try {
		let response = await fetch(`${url}?ts=${timestamp}&apikey=${apiKey}&hash=${hash}`, requestOptions)
		return response.json()
	} catch (e) {
		console.erro(e)
	}

}

function generateHash() {
	let timestamp = new Date().getMilliseconds()
	let hash = CryptoJS.MD5(timestamp+PRIVATE_KEY+PUBLIC_KEY).toString();	
	
	return {
		apiKey: PUBLIC_KEY, 
		hash, 
		timestamp
	}
}




