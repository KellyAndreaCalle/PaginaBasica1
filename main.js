const btnCart = document.querySelector('.container-cart-icon')
const containerCartProducts = document.querySelector('.container-cart-products')

btnCart.addEventListener('click', () => {
    containerCartProducts.classList.toggle('hidden-cart')
})


const cartInfo = document.querySelector('.cart-product');
const rowProduct = document.querySelector('.row-product');


const productsList = document.querySelector('.products');


let allProducts = [];

const valorTotal = document.querySelector('.total-pagar');

const countProducts = document.querySelector('#contador-productos');

const cartEmpty = document.querySelector('.cart-empty');
const cartTotal = document.querySelector('.cart-total');

const productImages = {
    "SHAMPOO BLOND ABSOLU": "Imagenes/CAPILAR/S-BLOND ABSOLU.webp",
    "SHAMPOO RESISTANCE": "Imagenes/CAPILAR/S-RESISTANCE.webp",
    "SHAMPOO CHROMA ABSOLU": "Imagenes/CAPILAR/S-CHROMA ABSOLU.webp",
    "SHAMPOO SYMBIOSE": "Imagenes/CAPILAR/S-SYMBIOSE.webp",
    "SHAMPOO DISCIPLINE": "Imagenes/CAPILAR/S-DISCIPLINE.webp",
    "SHAMPOO NUTRITIVE": "Imagenes/CAPILAR/S-NUTRITIVE .png",
    "SHAMPOO PREMIERE": "Imagenes/CAPILAR/S-PREMIERE.png",
    "SHAMPOO SPECIFIQUE": "Imagenes/CAPILAR/S-SPECIFIQUE.webp",

	"ACONDICIONADOR BLOND ABSOLU": "Imagenes/CAPILAR/C-BLOND ABSOLU.png",
    "ACONDICIONADOR RESISTANCE": "Imagenes/CAPILAR/C-RESISTANCE.png",
    "ACONDICIONADOR CHROMA ABSOLU": "Imagenes/CAPILAR/C-CHROMA ABSOLU.png",
    "ACONDICIONADOR SYMBIOSE": "Imagenes/CAPILAR/C-SYMBIOSE.png",
    "ACONDICIONADOR DISCIPLINE": "Imagenes/CAPILAR/C-DISCIPLINE.png",
    "ACONDICIONADOR NUTRITIVE VITAL": "Imagenes/CAPILAR/C-NUTRITIVE.webp",
    "ACONDICIONADOR PREMIERE": "Imagenes/CAPILAR/C-PREMIERE.png",
    "ACONDICIONADOR ELIXIR ULTIME": "Imagenes/CAPILAR/C-ELIXIR ULTIME.png",

	"ACEITE BLOND ABSOLU": "Imagenes/CAPILAR/A-BLOND ABSOLU.png",
    "ACEITE RESISTANCE": "Imagenes/CAPILAR/A-RESISTANCE.png",
    "ACEITE LUMIERE ROSE": "Imagenes/CAPILAR/A-LUMIERE ROSE.png",
    "ACEITE SYMBIOSE": "Imagenes/CAPILAR/A-SYMBIOSE.png",
    "ACEITE DISCIPLINE": "Imagenes/CAPILAR/A-DISCIPLINE.png",
    "ACEITE NUTRITIVE": "Imagenes/CAPILAR/A-NUTRITIVE.png",
    "ACEITE PREMIERE": "Imagenes/CAPILAR/A-PREMIERE.png",
    "ACEITE SPECIFIQUE": "Imagenes/CAPILAR/A-SPECIFIQUE .png",

	"MASCARILLA BLOND ABSOLU": "Imagenes/CAPILAR/M-BLOND ABSOLU.png",
    "MASCARILLA RESISTANCE": "Imagenes/CAPILAR/M-RESISTANCE.png",
    "MASCARILLA CHROMA ABSOLU": "Imagenes/CAPILAR/M-CHOROMA ABSOLU.png",
    "MASCARILLA SYMBIOSE": "Imagenes/CAPILAR/M-SYMBIOSE.png",
    "MASCARILLA DISCIPLINE": "Imagenes/CAPILAR/M-DISCIPLINE.png",
    "MASCARILLA NUTRITIVE": "Imagenes/CAPILAR/M-NUTRITIVE.webp",
    "MASCARILLA PREMIERE": "Imagenes/CAPILAR/M-PREMIERE.png",
    "MASCARILLA SPECIFIQUE": "Imagenes/CAPILAR/M-SPECIFIQUE.png",

	"TERMOPROTECTOR BLOND ABSOLU": "Imagenes/CAPILAR/T-BLOND ABSOLU.webp",
    "TERMOPROTECTOR RESISTANCE": "Imagenes/CAPILAR/T-RESISTANCE.webp",
    "TERMOPROTECTOR CHROMA ABSOLU": "Imagenes/CAPILAR/T-CHROMA ABSOLU.png",
    "TERMOPROTECTOR CHRONOLOGISTE": "Imagenes/CAPILAR/T-CHRONOLOGISTE .png",
    "TERMOPROTECTOR DISCIPLINE": "Imagenes/CAPILAR/T-DISCIPLINE.png",
    "TERMOPROTECTOR NUTRITIVE": "Imagenes/CAPILAR/T-NUTRITIVE.png",
    "TERMOPROTECTOR PREMIERE": "Imagenes/CAPILAR/T-PREMIERE.webp",
    "TERMOPROTECTOR GENESIS": "Imagenes/CAPILAR/T-GENESIS.webp"
};





productsList.addEventListener('click', e => {
	if (e.target.classList.contains('btn-add-cart')) {
		const product = e.target.parentElement;

		const infoProduct = {
			quantity: 1,
			title: product.querySelector('h3').textContent,
			price: product.querySelector('p').textContent,
            image: productImages[product.querySelector('h3').textContent]
		};

		const exits = allProducts.some(
			product => product.title === infoProduct.title
		);

		if (exits) {
			const products = allProducts.map(product => {
				if (product.title === infoProduct.title) {
					product.quantity++;
					return product;
				} else {
					return product;
				}
			});
			allProducts = [...products];
		} else {
			allProducts = [...allProducts, infoProduct];
		}

		showHTML();
	}
});

rowProduct.addEventListener('click', e => {
	if (e.target.classList.contains('icon-close')) {
		const product = e.target.parentElement;
		const title = product.querySelector('p').textContent;

		allProducts = allProducts.filter(
			product => product.title !== title
		);

		console.log(allProducts);

		showHTML();
	}
});


const showHTML = () => {
	if (!allProducts.length) {
		cartEmpty.classList.remove('hidden');
		rowProduct.classList.add('hidden');
		cartTotal.classList.add('hidden');
	} else {
		cartEmpty.classList.add('hidden');
		rowProduct.classList.remove('hidden');
		cartTotal.classList.remove('hidden');
	}

	
	rowProduct.innerHTML = '';

	let total = 0;
	let totalOfProducts = 0;

	allProducts.forEach(product => {
		const containerProduct = document.createElement('div');
		containerProduct.classList.add('cart-product');

		containerProduct.innerHTML = `
            <div class="info-cart-product">
            <img src="${product.image}" class="image-product-carrito" width="50" height="50">
                <span class="cantidad-producto-carrito">${product.quantity}</span>
                <p class="titulo-producto-carrito">${product.title}</p>
                <span class="precio-producto-carrito">${product.price}</span>
            </div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="icon-close"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                />
            </svg>
        `;

		rowProduct.append(containerProduct);

		total =
			total + parseInt(product.quantity * product.price.slice(1));
		totalOfProducts = totalOfProducts + product.quantity;
	});

	valorTotal.innerText = `$${total}`;
	countProducts.innerText = totalOfProducts;
};