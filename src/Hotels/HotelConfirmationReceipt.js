import { Divider } from "antd";
import React from "react";
import './HotelConfirmationReceipt.css'
import jsPDF from 'jspdf';
import pdfMake from 'pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import htmlToPdfmake from 'html-to-pdfmake';


const HotelConfirmationReceipt = () => {

function printDocument(){

    const doc = new jsPDF();

    //get html
    const pdfTable = document.getElementById('maindiv');
    //html to pdf format
    var html = htmlToPdfmake(pdfTable.innerHTML);

    const documentDefinition = { content: html };
    pdfMake.vfs = pdfFonts.pdfMake.vfs;
    pdfMake.createPdf(documentDefinition).open();

}

  return (
    <>
    <button className="downloadButton" onClick = {()=>{
      printDocument()
    }} >Download Bill</button>
    
    <div id = "maindiv" className="maindiv">
      <h1>QuickAI</h1>
      <br />
      <br />
      <table>
        <tr>
          <td>Name</td>
          <td>Ramlal</td>
        </tr>
        <tr>
          <td>E-mail</td>
          <td>ramlal@gmail.com</td>
        </tr>
        <tr>
          <td>Phone Number</td>
          <td>8328843840</td>
        </tr>
        <tr>
          <td>Payment ID</td>
          <td>pay_KCA3ig15VGwxfg</td>
        </tr>
        <tr>
          <td>Order ID</td>
          <td>order_KCA3ayM6EHYPuG</td>
        </tr>
        <tr>
          <td>Booking Number</td>
          <td>6339206c1d335e9f3532dc2635780c83abe5db3a19169d73a5c48ad30ed04653</td>
        </tr>
        <tr>
          <td>Booking Duration</td>
          <td>2 Nights</td>
        </tr>
        <tr>
          <td>Booking from-to</td>
          <td>9/9/2022 -  10/9/2022</td>
        </tr>
      </table>

      <br />
      <br />

      <h4>Room Details</h4>
      <table>
        <tr>
          <td>Hotel</td>
          <td>Some hotel name</td>
        </tr>
        <tr>
          <td>Address</td>
          <td>hotel's address</td>
        </tr>
        <tr>
          <td>Room Type</td>
          <td>Deluxe 2 bed</td>
        </tr>
      </table>
      
      <br />
      <br />

      <h4>Bill Details</h4>
      <table>
        <tr>
          <td>Base Price</td>
          <td>1600</td>
        </tr>
        <tr>
          <td>Taxes and Charges</td>
          <td>400</td>
        </tr>
        <tr>
          <td>Total</td>
          <td>2000</td>
        </tr>
      </table>

    </div>
    </>
  );
};

export default HotelConfirmationReceipt;
