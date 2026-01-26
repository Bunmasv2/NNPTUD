/**
 * Câu 1: Khai báo constructor function Product
 */
function Product(id, name, price, quantity, category, isAvailable) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.category = category;
    this.isAvailable = isAvailable;
}

/**
 * Câu 2: Khởi tạo mảng products
 */
const products = [
    new Product(1, "iPhone 15 Pro", 28000000, 10, "Smartphone", true),
    new Product(2, "MacBook M3", 35000000, 5, "Laptop", true),
    new Product(3, "AirPods Pro", 5000000, 0, "Accessories", false),
    new Product(4, "Samsung S24 Ultra", 31000000, 15, "Smartphone", true),
    new Product(5, "Ốp lưng Magsafe", 1200000, 50, "Accessories", true),
    new Product(6, "Chuột Magic Mouse", 2500000, 8, "Accessories", true)
];

console.log("--- Danh sách sản phẩm gốc ---");
console.table(products);

// Câu 3: Mảng mới chỉ chứa name và price
const nameAndPrice = products.map(p => ({ name: p.name, price: p.price }));
console.log("Câu 3:", nameAndPrice);

// Câu 4: Lọc ra sản phẩm còn hàng (quantity > 0)
const availableInStock = products.filter(p => p.quantity > 0);
console.log("Câu 4:", availableInStock);

// Câu 5: Kiểm tra có ít nhất một sản phẩm giá trên 30tr
const hasExpensiveProduct = products.some(p => p.price > 30000000);
console.log("Câu 5:", hasExpensiveProduct);

// Câu 6: Kiểm tra tất cả "Accessories" có đang bán không
const allAccessoriesAvailable = products
    .filter(p => p.category === "Accessories")
    .every(p => p.isAvailable);
console.log("Câu 6:", allAccessoriesAvailable);

// Câu 7: Tính tổng giá trị kho hàng
const totalValue = products.reduce((total, p) => total + (p.price * p.quantity), 0);
console.log("Câu 7: Tổng giá trị kho:", totalValue.toLocaleString(), "VND");

// Câu 8: Duyệt mảng bằng for...of
console.log("Câu 8:");
for (const p of products) {
    console.log(`${p.name} - ${p.category} - ${p.isAvailable ? "Đang bán" : "Ngừng bán"}`);
}

// Câu 9: Duyệt thuộc tính bằng for...in
console.log("Câu 9 (Sản phẩm 1):");
for (const key in products[0]) {
    console.log(`${key}: ${products[0][key]}`);
}

// Câu 10: Tên các sản phẩm đang bán và còn hàng
const activeProductNames = products
    .filter(p => p.isAvailable && p.quantity > 0)
    .map(p => p.name);
console.log("Câu 10:", activeProductNames);