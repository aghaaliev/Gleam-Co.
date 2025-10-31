// Product data
const products = [
    {
        id: 1,
        name: "Silver Elegance Necklace",
        description: "Classic silver chain necklace with elegant pendant",
        fullDescription: "A timeless piece that combines sophistication with versatility. This necklace features a delicate silver chain with a stunning pendant that catches the light beautifully. Perfect for both everyday wear and special occasions.",
        price: 129.99,
        icon: "💎",
        features: [
            "925 Sterling Silver",
            "18-inch adjustable chain",
            "Hypoallergenic materials",
            "Comes with elegant gift box",
            "Lifetime warranty"
        ]
    },
    {
        id: 2,
        name: "Moonstone Bracelet",
        description: "Delicate bracelet adorned with moonstone gems",
        fullDescription: "Experience the ethereal beauty of moonstone with this exquisite bracelet. Each stone is carefully selected for its luminous quality and set in premium silver. The adjustable design ensures a perfect fit for any wrist.",
        price: 89.99,
        icon: "✨",
        features: [
            "Natural moonstone gems",
            "925 Sterling Silver setting",
            "Adjustable 7-8 inch length",
            "Secure lobster clasp",
            "Certificate of authenticity"
        ]
    },
    {
        id: 3,
        name: "Crystal Drop Earrings",
        description: "Stunning drop earrings with crystal accents",
        fullDescription: "Make a statement with these elegant drop earrings. Featuring brilliant crystals that sparkle with every movement, set in high-quality silver. These earrings add the perfect touch of glamour to any outfit.",
        price: 79.99,
        icon: "💫",
        features: [
            "High-quality crystals",
            "925 Sterling Silver posts",
            "Secure butterfly backs",
            "Nickel-free",
            "1.5-inch drop length"
        ]
    },
    {
        id: 4,
        name: "Infinity Ring",
        description: "Minimalist ring with infinity symbol design",
        fullDescription: "Symbolize eternal love and connection with this beautifully crafted infinity ring. The sleek design makes it perfect for stacking or wearing alone. Crafted from premium silver with a polished finish.",
        price: 69.99,
        icon: "💍",
        features: [
            "925 Sterling Silver",
            "Available in sizes 5-10",
            "Polished finish",
            "Comfortable fit band",
            "Free resizing within 30 days"
        ]
    },
    {
        id: 5,
        name: "Pearl Pendant Set",
        description: "Elegant pearl pendant with matching earrings",
        fullDescription: "This stunning set features lustrous freshwater pearls set in exquisite silver. The pendant and earrings complement each other perfectly, making this an ideal gift or addition to your jewelry collection.",
        price: 159.99,
        icon: "⭐",
        features: [
            "Genuine freshwater pearls",
            "925 Sterling Silver",
            "Includes necklace and earrings",
            "Adjustable 16-18 inch chain",
            "Premium gift packaging"
        ]
    },
    {
        id: 6,
        name: "Starlight Bangle",
        description: "Contemporary bangle with star motif",
        fullDescription: "Reach for the stars with this modern bangle design. The delicate star pattern adds a touch of whimsy while maintaining an elegant aesthetic. Perfect for layering or wearing as a statement piece.",
        price: 94.99,
        icon: "⚡",
        features: [
            "925 Sterling Silver",
            "Flexible sizing",
            "Hand-polished finish",
            "Lightweight design",
            "Scratch-resistant coating"
        ]
    },
    {
        id: 7,
        name: "Geometric Cuff",
        description: "Modern cuff bracelet with geometric patterns",
        fullDescription: "Embrace contemporary style with this bold geometric cuff. The intricate pattern showcases expert craftsmanship while the open design ensures comfortable wear. A perfect statement piece for the modern jewelry lover.",
        price: 119.99,
        icon: "🔷",
        features: [
            "925 Sterling Silver",
            "Adjustable open design",
            "Unique geometric pattern",
            "Matte and polished finish",
            "Artist designed"
        ]
    },
    {
        id: 8,
        name: "Vintage Locket",
        description: "Timeless locket for cherished memories",
        fullDescription: "Keep your precious memories close to your heart with this beautifully detailed vintage-inspired locket. Opens to hold two photos and features intricate engraving on the exterior. A treasured heirloom in the making.",
        price: 139.99,
        icon: "❤️",
        features: [
            "925 Sterling Silver",
            "Holds two photos",
            "Intricate engraving",
            "20-inch chain included",
            "Secure magnetic closure"
        ]
    },
    {
        id: 9,
        name: "Cascade Chain Earrings",
        description: "Flowing chain design earrings",
        fullDescription: "These eye-catching earrings feature cascading silver chains that create beautiful movement. The modern design is both elegant and edgy, perfect for making a sophisticated statement.",
        price: 84.99,
        icon: "🌟",
        features: [
            "925 Sterling Silver",
            "3-inch cascade design",
            "Secure threader posts",
            "Lightweight construction",
            "Versatile styling"
        ]
    },
    {
        id: 10,
        name: "Halo Ring Collection",
        description: "Brilliant ring with halo setting",
        fullDescription: "This stunning ring features a brilliant center stone surrounded by a dazzling halo of smaller stones. The intricate setting showcases exceptional craftsmanship and creates maximum sparkle.",
        price: 179.99,
        icon: "💠",
        features: [
            "925 Sterling Silver",
            "Cubic zirconia stones",
            "Available in sizes 5-10",
            "Micro-pavé setting",
            "Luxury presentation box"
        ]
    },
    {
        id: 11,
        name: "Twisted Rope Bracelet",
        description: "Elegant twisted rope design bracelet",
        fullDescription: "This sophisticated bracelet features a beautifully twisted rope design that catches the light from every angle. The substantial weight and quality construction make this a jewelry box essential.",
        price: 109.99,
        icon: "🔗",
        features: [
            "925 Sterling Silver",
            "7.5-inch length",
            "Secure box clasp",
            "Substantial weight",
            "Anti-tarnish treatment"
        ]
    },
    {
        id: 12,
        name: "Celestial Charm Necklace",
        description: "Layered necklace with celestial charms",
        fullDescription: "Embrace cosmic elegance with this multi-layered necklace featuring moon, star, and sun charms. Each layer is thoughtfully designed to create a harmonious look that's both mystical and modern.",
        price: 99.99,
        icon: "🌙",
        features: [
            "925 Sterling Silver",
            "Three layered chains",
            "Multiple celestial charms",
            "Adjustable lengths",
            "Lobster clasp closures"
        ]
    }
];

// Display products in a grid
function displayProducts(productsToDisplay, containerId) {
    const container = document.getElementById(containerId);

    if (!container) return;

    let html = '';
    productsToDisplay.forEach(product => {
        html += `
            <div class="product-card">
                <div class="product-image">${product.icon}</div>
                <div class="product-info">
                    <h3 class="product-name">${product.name}</h3>
                    <p class="product-description">${product.description}</p>
                    <p class="product-price">$${product.price.toFixed(2)}</p>
                    <button class="add-to-cart-btn" onclick="addToCart(${product.id})">Add to Cart</button>
                    <a href="product-detail.html?id=${product.id}" style="display: block; margin-top: 0.5rem; text-align: center; color: var(--primary-blue); text-decoration: none; font-weight: 500;">View Details</a>
                </div>
            </div>
        `;
    });

    container.innerHTML = html;
}
