var form_1 = document.querySelector(".form_1");
var form_2 = document.querySelector(".form_2");
var form_4 = document.querySelector(".form_4");


var form_1_btns = document.querySelector(".form_1_btns");
var form_2_btns = document.querySelector(".form_2_btns");




var form_1_next_btn = document.querySelector(".form_1_btns .btn_next");
var form_2_back_btn = document.querySelector(".form_2_btns .btn_back");
var form_2_next_btn = document.querySelector(".form_2_btns .btn_next");
var form_4_back_btn = document.querySelector(".form_4_btns .btn_back");


var btn_done = document.querySelector(".btn_done");
var modal_wrapper = document.querySelector(".modal_wrapper");
var shadow = document.querySelector(".shadow");

form_1_next_btn.addEventListener("click", function(){

    form_1.style.display = "none";
	form_2.style.display = "block";

	form_1_btns.style.display = "none";
	form_2_btns.style.display = "flex";
	
});

form_2_back_btn.addEventListener("click", function(){
	form_2.style.display = "none";
	form_1.style.display = "block";
		
	form_2_btns.style.display = "none";
	form_1_btns.style.display = "flex";

});

form_2_next_btn.addEventListener("click", function(){
	
	form_2.style.display = "none";
	form_4.style.display = "block";

	form_2_btns.style.display = "none";
	last_buttons.style.display = "flex";



});

form_4_back_btn.addEventListener("click", function(){
	form_2.style.display = "block";
	form_4.style.display = "none";

	last_buttons.style.display = "none";
	form_2_btns.style.display = "flex";

	
});

btn_done.addEventListener("click", function(){
	
	
		modal_wrapper.classList.add("active");
		Submit_form();
	
	
})

shadow.addEventListener("click", function(){
	modal_wrapper.classList.remove("active");
})

function toggleShippingAddress() {
	const shippingAddressFields = document.getElementById('shippingAddressFields');
	const shippingAddressSelect = document.getElementById('shippingAddress');
	if (shippingAddressSelect.value === 'different') {
	  shippingAddressFields.style.display = 'block';
	} else {
	  shippingAddressFields.style.display = 'none';
	}
  }

// Sourcing  purpose toggle
  var form_1_sourcing = document.querySelector("#sourcingPurpose");
  form_1_sourcing.addEventListener("change",
  function(){
	// alert("trigger");
	if (form_1_sourcing.value =="Business consumption"){
	
		businessFields.style.display="block";
	}
	else {
		businessFields.style.display="none";
	}
  }
  )

  // form 1 logo and design file  upload toggle
  var form_1_print = document.querySelector("#printed");
  form_1_print.addEventListener("change",
  function(){
	// alert("trigger");
	
	if (form_1_print.value=="Yes"){
		Attachments.style.display="flex";
		
	}
	else {
		Attachments.style.display="none";
	}
  }
  )


  function Submit_form(){
	let Form_1 = document.getElementById("form1");
	let Form_2 = document.getElementById("form2");
	let Form_4 = document.getElementById("form4");
	Form_1.submit();
	Form_2.submit();
	Form_4.submit();

  }


  document.addEventListener("DOMContentLoaded", function() {
    const navbarToggler = document.querySelector(".navbar-toggler");
    const sideMenu = document.querySelector(".side-menu");

    navbarToggler.addEventListener("click", function() {
        sideMenu.classList.toggle("active");
    });
});


//GST handling
// Function to fetch business details from GST number
function fetchBusinessDetails(gstNumber) {
    // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint
	//https://api.mastergst.com/public/search?email=apisales%40mastergst.com&gstin=33AAGCC7144L6ZE
    const apiEndpoint = `https://api.mastergst.com/public/search?email=kumardev2124%40gmail.com&gstin=${gstNumber}`;

    // Make a GET request to the API endpoint
    fetch(apiEndpoint)
        .then(response => {
            // Check if the response is successful (status code 200)
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            // Parse the JSON response
            return response.json();
        })
        .then(data => {
            // Handle the retrieved business details data
            console.log('Business Details:', data);
            // Update your form fields or UI with the retrieved data
        })
        .catch(error => {
            console.error('Error fetching business details:', error);
            // Handle errors, such as displaying an error message to the user
        });
}

// Example usage:
const gstNumber = '250001';
fetchBusinessDetails(gstNumber);


// code to fetch city using pincode

const city="";
const state="";
const country="";

var pin = document.querySelector("#billingPinCode");


function Location(pincode) {
    // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint
	//https://api.mastergst.com/public/search?email=apisales%40mastergst.com&gstin=33AAGCC7144L6ZE
    const apiEndpoint = `https://api.postalpincode.in/pincode/${pincode}`;

    // Make a GET request to the API endpoint
    fetch(apiEndpoint)
        .then(response => {
            // Check if the response is successful (status code 200)
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            // Parse the JSON response
            return response.json();

        })
        .then(data => {
            // Handle the retrieved business details data
            console.log('Location:', data);
			if (data[0].Status == "Success"){

				
			}
			 alert("City : "+data[0].PostOffice[0].Circle);

            // Update your form fields or UI with the retrieved data
        })
        .catch(error => {
            console.error('Error fetching business details:', error);
            // Handle errors, such as displaying an error message to the user
        });
}

pin.addEventListener("input", function(){
	var pincode=this.value;
	Location(pincode);



});

// Example usage:




