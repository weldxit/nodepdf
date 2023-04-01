// Importing modules
// const useState = require('usestate')

const PDFDocument = require('pdfkit')
const fs = require( 'fs')
const axios = require('axios')
// Create a document
const doc = new PDFDocument();
// const [medicine, setMedicine] = useState();

const getmed= async (id) => {
   const med = await axios.get(`https://weldx-hospital.onrender.com/medicines/bucket/patient/${id}`)
   
   doc.text("Shree Ram Hospital",10, 20, {width:200});
   doc.text("Kalinga Vihar, Bhubaneswar, India",10, 40, 200);
   doc.text("7077598851, 7077598851",10, 60, 200);

   doc.fillColor("black").text(   "Name", 10, 100, 80)
   doc.fillColor("black").text(   "Age", 10, 115, 80)
   doc.fillColor("black").text(   "Gender", 10, 130, 80)
   doc.fillColor("black").text(   "Marital", 10, 145, 80)
   doc.fillColor("black").text(   "Phone", 10, 160, 80)
   doc.fillColor("red").text(   med.data[med.data.length -1 ].patient_name, 150, 100, 200)
   doc.fillColor("red").text(   med.data[med.data.length -1 ].age, 150, 115, 200)
   doc.fillColor("red").text(   med.data[med.data.length -1 ].gender, 150, 130, 200)
   doc.fillColor("red").text(   med.data[med.data.length -1 ].marital, 150, 145, 200)
   doc.fillColor("red").text(   med.data[med.data.length -1 ].phone_no, 150, 160, 200)
   doc.rect(7, 200, 590, 20).fill("#FC427B").stroke("#FC427B");
   doc.fillColor("black").text("ID", 20, 206, { width: 90 });
   doc.text("Product", 110, 206, { width: 190 });
   doc.text("Qty", 300, 206, { width: 100 });
   doc.text("Price", 400, 206, { width: 100 });
   doc.text("Total Price", 500, 206, { width: 100 });

//writing the medicine

let yy 
med.data[0].meds_n_total.empty.map((product, i)=>{
    let y = 226 + (i*20)
    doc.text(i+1, 20, y,{width:90})
    doc.text(product.med_name, 110,y,{width:190} )
    doc.text(product.quantity, 300, y)
    doc.text(product.cost, 400, y )
    doc.text(product.cost * product.quantity, 500, y)
    yy= y
    // console.log(product.length)  
})

doc.rect(7, yy+20, 590, 0.2).fillColor("#000").stroke("#000");
doc.text("Total", 450, yy+25 )
doc.text("10000", 500, yy+25 )


// doc.text("abcd", {
//     columns: 3,
//     columnGap: 15,
//     height: 400,
//     width: 465,
//     align: 'justify'
//   });


   // // Finalize PDF file
doc.end();

// // Saving the pdf file in root directory.
doc.pipe(fs.createWriteStream('example.pdf'));
}
getmed(77)


















const prescription = [  
    {
      patient_name: 'OM PRAKASH MEHER',
      category_name: null,
      payment_id: null,
      admitted: '2023-04-01T00:00:00.000Z',
      released: '2023-04-01T00:00:00.000Z',
      phone_no: '6371686841',
      email_id: 'omprakashmeher437@gmail.com',
      address: 'kusta pada remunda, bargharh',
      gender: 'Male',
      blood_grp: 'A +ve',
      date_of_birth: '2001-10-04T00:00:00.000Z',
      patient_state: null,
      weight: '72',
      age: '21',
      marital: 'Single',
      disease: 'cancer',
      dept_id: '1',
      dept_name: 'Oncology',
      category_id: null,
      patient_id: '77',
      unique_code: '209ca48e7cf01a7fe56518fd93dad7212fadb1273bdd4aff6ce6ab9d611f34df',
      purchased_on: '2023-04-01T00:00:00.000Z',
      meds_n_total: { empty: [Array], total: [Array] },
      mpr_id: '31',
      checked: null
    },
    {
      patient_name: 'OM PRAKASH MEHER',
      category_name: null,
      payment_id: null,
      admitted: '2023-04-01T00:00:00.000Z',
      released: '2023-04-01T00:00:00.000Z',
      phone_no: '6371686841',
      email_id: 'omprakashmeher437@gmail.com',
      address: 'kusta pada remunda, bargharh',
      gender: 'Male',
      blood_grp: 'A +ve',
      date_of_birth: '2001-10-04T00:00:00.000Z',
      patient_state: null,
      weight: '72',
      age: '21',
      marital: 'Single',
      disease: 'cancer',
      dept_id: '1',
      dept_name: 'Oncology',
      category_id: null,
      patient_id: '77',
      unique_code: '209ca48e7cf01a7fe56518fd93dad7212fadb1273bdd4aff6ce6ab9d611f34df',
      purchased_on: '2023-04-01T00:00:00.000Z',
      meds_n_total: { empty: [Array], total: [Array] },
      mpr_id: '29',
      checked: true
    },
    {
      patient_name: 'OM PRAKASH MEHER',
      category_name: null,
      payment_id: null,
      admitted: '2023-04-01T00:00:00.000Z',
      released: '2023-04-01T00:00:00.000Z',
      phone_no: '6371686841',
      email_id: 'omprakashmeher437@gmail.com',
      address: 'kusta pada remunda, bargharh',
      gender: 'Male',
      blood_grp: 'A +ve',
      date_of_birth: '2001-10-04T00:00:00.000Z',
      patient_state: null,
      weight: '72',
      age: '21',
      marital: 'Single',
      disease: 'cancer',
      dept_id: '1',
      dept_name: 'Oncology',
      category_id: null,
      patient_id: '77',
      unique_code: '209ca48e7cf01a7fe56518fd93dad7212fadb1273bdd4aff6ce6ab9d611f34df',
      purchased_on: '2023-04-01T00:00:00.000Z',
      meds_n_total: { empty: [Array], total: [Array] },
      mpr_id: '30',
      checked: null
    }
  ]
// console.log(data)
//   const med = axios.get("https://weldx-hospital.onrender.com/medicines/bucket/patient/77")
  
  
  
// console.log(medicine)


// // Adding functionality
// // doc

// // .fontSize(15)
// // .text(`${text}`, 30,10);

// // Adding an image in the pdf.

// // doc.image('download3.jpg', {
// // 	fit: [300, 300],
// // 	align: 'center',
// // 	valign: 'center'
// // });

// doc
// .addPage()
// .fontSize(15)
// .text('Generating PDF with the help of pdfkit', 100, 100);



// // Apply some transforms and render an SVG path with the
// // 'even-odd' fill rule
// doc
// .scale(0.6)
// .translate(470, -380)
// .path('M 250,75 L 323,301 131,161 369,161 177,301 z')
// .fill('red', 'even-odd')
// .restore();

// // Add some text with annotations
// doc
// .addPage()
// .fillColor('blue')
// .text('The link for GeeksforGeeks website', 100, 100)
	
// .link(100, 100, 160, 27, 'https://www.geeksforgeeks.org/');

