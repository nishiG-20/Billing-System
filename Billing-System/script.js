showNavbar()

function showNavbar() {
	//Grab The id
	let navId = document.getElementById('navb')
	//Make The Navbar
	let makeTheNav = makeNavbar()
	navId.innerHTML = makeTheNav
}


function makeNavbar() {
	return `
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
              <div class="container-fluid">
                <a class="navbar-brand" href="#">BillingSystem</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                      <a class="nav-link" aria-current="page" href="#" onclick="showBill()">New Bill</a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
           `
}


let products = [
	{ "code": "PEP221", "prod": "Pepsi", "price": 12, "instock": "Yes", "category": "Beverages" },
	{ "code": "COK113", "prod": "Coca Cola", "price": 18, "instock": "Yes", "category": "Beverages" },
	{ "code": "MIR646", "prod": "Mirinda", "price": 15, "instock": "No", "category": "Beverages" },
	{ "code": "SLI874", "prod": "Slice", "price": 22, "instock": "Yes", "category": "Beverages" },
	{ "code": "MIN654", "prod": "Minute Maid", "price": 25, "instock": "Yes", "category": "Beverages" },
	{ "code": "APP652", "prod": "Appy", "price": 10, "instock": "No", "category": "Beverages" },
	{ "code": "FRO085", "prod": "Frooti", "price": 30, "instock": "Yes", "category": "Beverages" },
	{ "code": "REA546", "prod": "Real", "price": 24, "instock": "No", "category": "Beverages" },
	{ "code": "DM5461", "prod": "Dairy Milk", "price": 40, "instock": "Yes", "category": "Chocolates" },
	{ "code": "KK6546", "prod": "Kitkat", "price": 15, "instock": "Yes", "category": "Chocolates" },
	{ "code": "PER5436", "prod": "Perk", "price": 8, "instock": "No", "category": "Chocolates" },
	{ "code": "FST241", "prod": "5 Star", "price": 25, "instock": "Yes", "category": "Chocolates" },
	{ "code": "NUT553", "prod": "Nutties", "price": 18, "instock": "Yes", "category": "Chocolates" },
	{ "code": "GEM006", "prod": "Gems", "price": 8, "instock": "No", "category": "Chocolates" },
	{ "code": "GD2991", "prod": "Good Day", "price": 25, "instock": "Yes", "category": "Biscuits" },
	{ "code": "PAG542", "prod": "Parle G", "price": 5, "instock": "Yes", "category": "Biscuits" },
	{ "code": "MON119", "prod": "Monaco", "price": 7, "instock": "No", "category": "Biscuits" },
	{ "code": "BOU291", "prod": "Bourbon", "price": 22, "instock": "Yes", "category": "Biscuits" },
	{ "code": "MAR951", "prod": "MarieGold", "price": 15, "instock": "Yes", "category": "Biscuits" },
	{ "code": "ORE188", "prod": "Oreo", "price": 30, "instock": "No", "category": "Biscuits" }
]


function showBill() {
	//grab The id
	let showTheBill = document.getElementById('shwBl')
	//Make The BIll
	let makeTheBill = makeBill()
	showTheBill.innerHTML = makeTheBill
}

//Details of Current Bills 

function makeBillDetails() {
	let currBill = `<h3>Details Of Current Bill</h3>`
	let info = `<div class="bg-info text-dark">
				 Items:<span id="itm1">0</span>
				 ,Quantity:<span id="quant">0</span>
				 ,Amount:<span id="amt1">0</span>
	            </div>`

	let billDtl = `
	               <div class="container-fluid my-2 bg-light text-dark">
				     ${currBill}
				     ${info}
				     <div id="prchItm">
				     </div>
				   </div>
				`
	return billDtl
}


function makeBill() {

	let billDtl = makeBillDetails()

	let hd2 = `<h1 class="text-center">Product List</h1>`

	let tableDropDown = `
                 <div class="row container-fluid">

                    <div class="col-3">
                      <h5>Filter Products by:</h5>
                    </div>
                    <div class="col-3">

                      <div class="form-group">
                       <select id="Ctgry" class="form-control" onclick="filterTable()">
                         <option>Select Category</option>
                         <option>Beverages</option>
                         <option>Chocolates</option>
                         <option>Biscuits</option>
                       <select>
                      </div>

                    </div>
                    <div class="col-3">

                      <div class="form-group">
                       <select id="stk" class="form-control" onclick="filterTable()">
                         <option>Select in Stock</option>
                         <option>Yes</option>
                         <option>No</option>
                       <select>
                     </div>

                    </div>
                    <div class="col-3">
                      <div class="form-group">
                        <select id="prc" class="form-control" onclick="filterTable()">
                          <option>Select Price Range</option>
                          <option><10</option>
                          <option>10-20</option>
                          <option>>20</option>
                        <select>
                      </div>
                    </div>
                 </div>
                `

	let tableHeading = `
                       <div class="row bg-dark text-white container-fluid">
                          <div class="col-2 crsr" id="cd1" onclick="sortProducts(1)">
                           Code
                          </div>
                          <div class="col-2 crsr" id="pro2" onclick="sortProducts(2)">
                            Product
                          </div>
                          <div class="col-2 crsr" id="ct3" onclick="sortProducts(3)" >
                            Category
                          </div>
                          <div class="col-2 crsr" id="prc1" onclick="sortThePrice()">
                            Price
                          </div>
                          <div class="col-2 crsr" id="instk4" onclick="sortProducts(4)">
                            In Stock
                          </div>
                          <div class="col-2 crsr">
                          </div>
                       </div>
                     `

	let tableBody = products.map((prdt, index) => {
		let { code, prod, price, instock, category } = prdt
		return `
                 <div class="row border container-fluid">
                     <div class="col">
                      ${code}
                     </div>
                     <div class="col">
                      ${prod}
                     </div>
                     <div class="col">
                     ${category}
                     </div>
                     <div class="col">
                     ${price}
                     </div>
                     <div class="col">
                    ${instock}
                     </div>
                     <div class="col">
                        <button type="button" class="btn btn-secondary" onclick="addEntry(${index})">Add To Bill</button>
                     </div>
                </div>
            `
	})

	let completeTable = `${tableHeading}${tableBody.join('')}`

	return billDtl + hd2 + tableDropDown + completeTable
}


//------------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------Sorting Functions-------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------------


let index
function sortProducts(val) {
	index = val
	products.sort(sortTheProd)
	showBill()
	if (val === 1) {
		let id = document.getElementById('cd1')
		id.innerHTML = 'Code(X)'
	} else if (val === 2) {
		let id = document.getElementById('pro2')
		id.innerHTML = 'Product(X)'
	} else if (val === 3) {
		let id = document.getElementById('ct3')
		id.innerHTML = 'Category(X)'
	} else if (val === 4) {
		let id = document.getElementById('instk4')
		id.innerHTML = 'In Stock(X)'
	}
}


function sortTheProd(product1, product2) {
	let prod1
	let prod2

	if (index === 1) {
		prod1 = product1.code
		prod2 = product2.code
	} else if (index === 2) {
		prod1 = product1.prod
		prod2 = product2.prod
	} else if (index === 3) {
		prod1 = product1.category
		prod2 = product2.category
	} else if (index === 4) {
		prod1 = product1.instock
		prod2 = product2.instock
	}

	return prod1.localeCompare(prod2)
}


function sortThePrice() {
	products.sort(sortProdByNum)
	showBill()
	let id = document.getElementById('prc1')
	id.innerHTML = 'Price(X)'
}


function sortProdByNum(prod1, prod2) {
	let prc1 = prod1.price
	let prc2 = prod2.price

	if (prc1 < prc2) {
		return -1
	} else if (prc1 > prc2) {
		return 1
	} else return 0
}


//-------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------Filter Table---------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------


function filterTable() {
	let currBill = `<h3>Details Of Current Bill</h3>`
	let info = `<div class="bg-info text-dark">
				 Items:<span id="itm1">0</span>
				 ,Quantity:<span id="quant">0</span>
				 ,Amount:<span id="amt1">0</span>
	            </div>`

	let billDtl = `
	               <div class="container-fluid my-2 bg-light text-dark">
				     ${currBill}
				     ${info}
				     <div id="prchItm">
				     </div>
				   </div>
				`

	let selected1, selected2, selected3, selected4
	let val1 = document.getElementById('Ctgry').value

	selected1 = (val1 === 'Select Category') ? 'selected' : ''
	selected2 = (val1 === 'Beverages') ? 'selected' : ''
	selected3 = (val1 === 'Chocolates') ? 'selected' : ''
	selected4 = (val1 === 'Biscuits') ? 'selected' : ''

	let selected5, selected6, selected7
	let val2 = document.getElementById('stk').value
	selected5 = (val2 === 'Select in Stock') ? 'selected' : ''
	selected6 = (val2 === 'Yes') ? 'selected' : ''
	selected7 = (val2 === 'No') ? 'selected' : ''

	let selected8, selected9, selected10, selected11
	let val3 = document.getElementById('prc').value
	selected8 = (val3 === 'Select Price Range') ? 'selected' : ''
	selected9 = (val3 === '<10') ? 'selected' : ''
	selected10 = (val3 === '10-20') ? 'selected' : ''
	selected11 = (val3 === '>20') ? 'selected' : ''



	//Main Heading
	let hd2 = `<h1 class="text-center">Product List</h1>`

	//Table Heading
	let tableHeading = `
                        <div class="row bg-dark text-white container-fluid">
                            <div class="col-2 crsr" id="cd1" onclick="sortProduct(1)">
                             Code
                            </div>
                            <div class="col-2 crsr" id="pro2" onclick="sortProduct(2)">
                              Product
                            </div>
                            <div class="col-2 crsr" id="ct3" onclick="sortProduct(3)" >
                              Category
                            </div>
                            <div class="col-2 crsr" id="prc1" onclick="sortThePric()">
                              Price
                            </div>
                            <div class="col-2 crsr" id="instk4" onclick="sortProduct(4)">
                              In Stock
                            </div>
                            <div class="col-2 crsr">
                            </div>
                        </div>
                     `


	let tableDropDown = `
					 <div class="row container-fluid">
	
						<div class="col-3">
						  <h5>Filter Products by:</h5>
						</div>
						<div class="col-3">
	
						  <div class="form-group">
						   <select id="Ctgry" class="form-control" onclick="filterTable()">
							 <option ${selected1}>Select Category</option>
							 <option ${selected2}>Beverages</option>
							 <option ${selected3}>Chocolates</option>
							 <option ${selected4}>Biscuits</option>
						   <select>
						  </div>
	
						</div>
						<div class="col-3">
	
						  <div class="form-group">
						  <select id="stk" class="form-control" onclick="filterTable()">
							<option ${selected5}>Select in Stock</option>
							<option ${selected6}>Yes</option>
							<option ${selected7}>No</option>
						  <select>
						 </div>
	
						</div>
						<div class="col-3">
						  <div class="form-group">
							<select id="prc" class="form-control" onclick="filterTable()">
							  <option ${selected8}>Select Price Range</option>
							  <option ${selected9}><10</option>
							  <option ${selected10}>10-20</option>
							  <option ${selected11}>>20</option>
							<select>
						  </div>
						</div>
					 </div>
					`

	let fltrTableBody = filterValue()

	//let completeTable = `${tableHeading}${fltrTableBody}`

	//grab The id
	let showTheBill = document.getElementById('shwBl')
	//showTheBill.innerHTML = hd2 + tableDropDown + completeTable

	showTheBill.innerHTML = `${billDtl} ${hd2} ${tableDropDown} ${tableHeading} ${fltrTableBody}`

	displayItem()

}

function filterValue() {

	//Grab The DropDown value
	let val1 = document.getElementById('Ctgry').value
	let val2 = document.getElementById('stk').value
	let val3 = document.getElementById('prc').value

	if (val1 === 'Select Category') {
		val1 = ''
	}

	if (val2 === 'Select in Stock') {
		val2 = ''
	}

	if (val3 === 'Select Price Range') {
		val3 = ''
	}


	if (val1 && val2 && val3) {
		var tableBody = products.map((prdt, index) => {
			let { code, prod, price, instock, category } = prdt

			if (val1 === category && val2 === instock && checkPrice(price, val3)) {

				return `
			        		 <div class="row border container-fluid">
			        			 <div class="col">
			        			  ${code}
			        			 </div>
			        			 <div class="col">
			        			  ${prod}
			        			 </div>
			        			 <div class="col">
			        			 ${category}
			        			 </div>
			        			 <div class="col">
			        			 ${price}
			        			 </div>
			        			 <div class="col">
			        			${instock}
			        			 </div>
			        			 <div class="col">
			        				<button type="button" class="btn btn-secondary" onclick="addEntry(${index})">Add To Bill</button>
			        			 </div>
			        		</div>`

			}

		})
	} else if (val1 && val2) {
		var tableBody = products.map((prdt, index) => {
			let { code, prod, price, instock, category } = prdt

			if (val1 === category && val2 === instock) {
				return `
			        		 <div class="row border container-fluid">
			        			 <div class="col">
			        			  ${code}
			        			 </div>
			        			 <div class="col">
			        			  ${prod}
			        			 </div>
			        			 <div class="col">
			        			 ${category}
			        			 </div>
			        			 <div class="col">
			        			 ${price}
			        			 </div>
			        			 <div class="col">
			        			${instock}
			        			 </div>
			        			 <div class="col">
			        				<button type="button" class="btn btn-secondary" onclick="addEntry(${index})">Add To Bill</button>
			        			 </div>
			        		</div>`

			}

		})
	} else if (val1) {

		var tableBody = products.map((prdt, index) => {
			let { code, prod, price, instock, category } = prdt

			if (val1 === category) {
				return `
			        		 <div class="row border container-fluid">
			        			 <div class="col">
			        			  ${code}
			        			 </div>
			        			 <div class="col">
			        			  ${prod}
			        			 </div>
			        			 <div class="col">
			        			 ${category}
			        			 </div>
			        			 <div class="col">
			        			 ${price}
			        			 </div>
			        			 <div class="col">
			        			${instock}
			        			 </div>
			        			 <div class="col">
			        				<button type="button" class="btn btn-secondary" onclick="addEntry(${index})"> Add To Bill</button>
			        			 </div>
			        		</div>`

			}

		})
	} else if (val1 && val3) {
		var tableBody = products.map((prdt, index) => {
			let { code, prod, price, instock, category } = prdt

			if (val1 === category && checkPrice(price, val3)) {
				return `
			        		 <div class="row border container-fluid">
			        			 <div class="col">
			        			  ${code}
			        			 </div>
			        			 <div class="col">
			        			  ${prod}
			        			 </div>
			        			 <div class="col">
			        			 ${category}
			        			 </div>
			        			 <div class="col">
			        			 ${price}
			        			 </div>
			        			 <div class="col">
			        			${instock}
			        			 </div>
			        			 <div class="col">
			        				<button type="button" class="btn btn-secondary" onclick="addEntry(${index})">Add To Bill</button>
			        			 </div>
			        		</div>`

			}

		})
	} else if (val2 && val3) {
		var tableBody = products.map((prdt, index) => {
			let { code, prod, price, instock, category } = prdt

			if (val2 === instock && checkPrice(price, val3)) {
				return `
			        		 <div class="row border container-fluid">
			        			 <div class="col">
			        			  ${code}
			        			 </div>
			        			 <div class="col">
			        			  ${prod}
			        			 </div>
			        			 <div class="col">
			        			 ${category}
			        			 </div>
			        			 <div class="col">
			        			 ${price}
			        			 </div>
			        			 <div class="col">
			        			${instock}
			        			 </div>
			        			 <div class="col">
			        				<button type="button" class="btn btn-secondary" onclick="addEntry(${index})">Add To Bill</button>
			        			 </div>
			        		</div>`

			}

		})
	} else if (val2) {
		var tableBody = products.map((prdt, index) => {
			let { code, prod, price, instock, category } = prdt

			if (val2 === instock) {
				return `
			        		 <div class="row border container-fluid">
			        			 <div class="col">
			        			  ${code}
			        			 </div>
			        			 <div class="col">
			        			  ${prod}
			        			 </div>
			        			 <div class="col">
			        			 ${category}
			        			 </div>
			        			 <div class="col">
			        			 ${price}
			        			 </div>
			        			 <div class="col">
			        			${instock}
			        			 </div>
			        			 <div class="col">
			        				<button type="button" class="btn btn-secondary" onclick="addEntry(${index})">Add To Bill</button>
			        			 </div>
			        		</div>`

			}

		})
	} else if (val3) {
		var tableBody = products.map((prdt, index) => {
			let { code, prod, price, instock, category } = prdt

			if (checkPrice(price, val3)) {
				return `
			        		 <div class="row border container-fluid">
			        			 <div class="col">
			        			  ${code}
			        			 </div>
			        			 <div class="col">
			        			  ${prod}
			        			 </div>
			        			 <div class="col">
			        			 ${category}
			        			 </div>
			        			 <div class="col">
			        			 ${price}
			        			 </div>
			        			 <div class="col">
			        			${instock}
			        			 </div>
			        			 <div class="col">
			        				<button type="button" class="btn btn-secondary" onclick="addEntry(${index})">Add To Bill</button>
			        			 </div>
			        		</div>`

			}

		})
	} else {
		var tableBody = products.map((prdt, index) => {
			let { code, prod, price, instock, category } = prdt
			return `
			        		 <div class="row border container-fluid">
			        			 <div class="col">
			        			  ${code}
			        			 </div>
			        			 <div class="col">
			        			  ${prod}
			        			 </div>
			        			 <div class="col">
			        			 ${category}
			        			 </div>
			        			 <div class="col">
			        			 ${price}
			        			 </div>
			        			 <div class="col">
			        			${instock}
			        			 </div>
			        			 <div class="col">
			        				<button type="button" class="btn btn-secondary" onclick="addEntry(${index})">Add To Bill</button>
			        			 </div>
			        		</div>`

		})
	}

	return tableBody.join('')
}

//Adjust Price value
function checkPrice(price, val3) {
	if (val3 === '<10' && price < 10) {
		return 1
	} else if (val3 === '10-20' && price >= 10 && price <= 20) {
		return 1
	} else if (val3 === '>20' && price > 20) {
		return 1
	} else return 0
}

//-------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------Sorted Function For Filter Array--------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------

let index2
function sortProduct(val) {
	index2 = val
	products.sort(sortThePro)
	filterTable()
	if (val === 1) {
		let id = document.getElementById('cd1')
		id.innerHTML = 'Code(X)'
	} else if (val === 2) {
		let id = document.getElementById('pro2')
		id.innerHTML = 'Product(X)'
	} else if (val === 3) {
		let id = document.getElementById('ct3')
		id.innerHTML = 'Category(X)'
	} else if (val === 4) {
		let id = document.getElementById('instk4')
		id.innerHTML = 'In Stock(X)'
	}
}


function sortThePro(product1, product2) {
	let prod1
	let prod2

	if (index2 === 1) {
		prod1 = product1.code
		prod2 = product2.code
	} else if (index2 === 2) {
		prod1 = product1.prod
		prod2 = product2.prod
	} else if (index2 === 3) {
		prod1 = product1.category
		prod2 = product2.category
	} else if (index2 === 4) {
		prod1 = product1.instock
		prod2 = product2.instock
	}

	return prod1.localeCompare(prod2)
}



function sortThePric() {
	products.sort(sortProdByNm)
	filterTable()
	let id = document.getElementById('prc1')
	id.innerHTML = 'Price(X)'
}


function sortProdByNm(prod1, prod2) {
	let prc1 = prod1.price
	let prc2 = prod2.price
	filterTable()
	if (prc1 < prc2) {
		return -1
	} else if (prc1 > prc2) {
		return 1
	} else return 0
}


//--------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------Add Entry---------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------

//Display variable
let displayItems = 0
let displayQuantity = 0
let displayAmount = 0


let items = []

function addEntry(index) {
	//Check Element Before Inserting (If Element is repeatng or not)
	let idx = items.findIndex(itm => itm.code === products[index].code)

	if (idx < 0) {
		let item = {}
		item.code = products[index].code
		item.prod = products[index].prod
		item.price = products[index].price
		item.quantity = 1
		item.value = products[index].price
		items.push(item)

		//Update Main Display variable
		displayItems++
		displayQuantity++
		displayAmount = displayAmount + item.price

		displayItem()
	} else alert(products[index].prod + ' has been already added')

}


function displayItem() {
	//Grab Id To add Item
	let id = document.getElementById('prchItm')


	let cartItem = items.map((item, index) => {
		let { code, prod, price, quantity, value } = item

		return `
		         <div class="row container-fluid border bg-light text-dark">
				    <div class="col">
					   <span>${code}</span>
					   <span>${prod}</span>
					   Price:<span>${price}</span>
					   Quantity:<span >${quantity}</span>
					   Value:<span >${value}</span>
					</div>
					<div class="col">
					   <button type="button"  onclick="incItem(${index})" class="btn btn-success">+</button>
					   <button type="button"  onclick="decItem(${index})" class="btn btn-warning">-</button>
					   <button type="button"  onclick="cancelItem(${index})" class="btn btn-danger">x</button>
					</div>
				 </div>
		       `
	})

	let closeBtn = `<button type="button" class="btn btn-primary" onclick="closeBill()">Close Bill</button>`

	if (displayItems === 0) {
		closeBtn = ''
	}

	id.innerHTML = cartItem.join('') + closeBtn

	//Update The Display
	let dispitem = document.getElementById('itm1')
	let dispquant = document.getElementById('quant')
	let dispamount = document.getElementById('amt1')

	dispitem.innerHTML = displayItems
	dispquant.innerHTML = displayQuantity
	dispamount.innerHTML = displayAmount
}

function incItem(index) {
	items[index].quantity = items[index].quantity + 1
	items[index].value = items[index].quantity * items[index].price
	displayQuantity++
	displayAmount = displayAmount + items[index].price
	displayItem()
}


function decItem(index) {
	if (items[index].quantity > 1) {
		items[index].quantity = items[index].quantity - 1
		items[index].value = items[index].quantity * items[index].price

		displayAmount = displayAmount - items[index].price
	}
	else {
		displayItems--
		displayAmount = displayAmount - items[index].price
		items.splice(index, 1)
	}
	displayQuantity--

	//displayAmount = displayAmount - items[index].price
	displayItem()
}

function cancelItem(index) {
	displayQuantity = displayQuantity - items[index].quantity
	displayAmount = displayAmount - items[index].value
	items.splice(index, 1)
	displayItems--
	displayItem()
}

//Close Current Bill
function closeBill() {
	if (confirm('Closing The Current bill')) {
		document.getElementById('prchItm').innerHTML = ''
	}
}