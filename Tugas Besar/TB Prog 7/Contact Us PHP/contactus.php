<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous" />
    <!-- JavaScript Bundle with Popper -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    <style>
      body {
        font-family: Arial, Helvetica, sans-serif;
      }

      * {
        box-sizing: border-box;
      }

      /* Style inputs */
      input[type='text'],
      select,
      textarea {
        width: 100%;
        padding: 12px;
        border: 1px solid #ccc;
        margin-top: 6px;
        margin-bottom: 16px;
        resize: vertical;
      }

      input[type='submit'] {
        background-color: #04aa6d;
        color: white;
        padding: 12px 20px;
        border: none;
        cursor: pointer;
      }

      input[type='submit']:hover {
        background-color: #45a049;
      }

      /* Create two columns that float next to eachother */
      .column {
        float: left;
        width: 50%;
        margin-top: 6px;
        padding: 20px;
      }

      /* Clear floats after the columns */
      .row:after {
        content: '';
        display: table;
        clear: both;
      }

      /* Responsive layout - when the screen is less than 600px wide, make the two columns stack on top of each other instead of next to each other */
      @media screen and (max-width: 600px) {
        .column,
        input[type='submit'] {
          width: 100%;
          margin-top: 0;
        }
      }
      .border {
        border: 3px solid #e0e722;
        box-shadow: 0 0 1px #b3ff51, 0 0 2px #b3ff51, 0 0 6px #b3ff51, 0 0 12px #b3ff51, inset 0 0 1px #b3ff51, inset 0 0 2px #b3ff51, inset 0 0 6px #b3ff51, inset 0 0 12px #b3ff51;
      }
    </style>
  </head>
  <body>
        <!-- Navbar -->
        <span id="0"></span>
     <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
       <div class="container ">
         <a class="navbar-brand" >
           <img src="src/logo.png" alt="" width="60" height="60" class="d-inline-block align-middle" />
           <span class="align-middle ms-2 fw-light fs-4" style="letter-spacing: 2px">Gadget Store</span>
         </a>
         <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
           <span class="navbar-toggler-icon"></span>
         </button>
         <div class="collapse navbar-collapse ms-2 mt-3" id="navbarNavDropdown">
           <ul class="navbar-nav ms-auto ">
             <li class="nav-item">
               <a class="nav-link" aria-current="page" href="../Home2.html">Home</a>
             </li>
             <li class="nav-item">
               <a class="nav-link" href="contactus.php">ContactUs</a>
             </li>
             <li class="nav-item">
               <a class="nav-link" aria-current="page" href="../aboutus.html">AboutUs</a>
             </li>
             <li class="nav-item">
               <a class="nav-link" href="../resources.html">Resources</a>
               </li>
             <li class="nav-item">
               <a class="nav-link" href="../index.html">Logout</a>
             </li>
             <li class="nav-item">
               <div class="form-check form-switch  mt-2 me-2">
                 <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onchange="a()" />
                 <script>
                   function a() {
                     var x = document.body;
                     if (x.style.backgroundColor == 'black') {
                       document.body.style.backgroundColor = 'white';
                       document.getElementById('flexSwitchCheckDefault').style.backgroundColor = 'white';
                       document.getElementById('judul1').style.color = 'black';
                       
                      
                     } else {
                       document.body.style.backgroundColor = 'black';
                       document.getElementById('flexSwitchCheckDefault').style.backgroundColor = 'black';
                       document.getElementById('judul1').style.color = 'white';
  
                       
                     }
                   }
                 </script>
             </li>
           </ul>
         </div>
       </div>
     </nav>
     <!--Akhir Navbar-->
    <div class="mt-3" id="judul1">
    <div style="text-align: center;">
        <h1>Contact Us</h1>
      </div>
    <div class="container">
      
        <div class="column d-inline">
          <img src="src/logo.png" style="width: 100%" class="mt-2" />
        </div>
        <div class="column d-inline text-start">
          <form method="POST">
            <label for="fname">Name</label>
            <input type="text" id="fname" name="fname" placeholder="Insert Your Name" />
            <label for="lname">Email</label>
            <input type="text" id="lname" name="lname" placeholder="Insert Your Email" />
            <label for="country">Country</label>
            <select id="country" name="country">
              <option value="australia">Australia</option>
              <option value="canada">Canada</option>
              <option value="usa">USA</option>
              <option value="indonesia">Indonesia</option>
              <option value="overseas">Overseas</option>
            </select>
            <label for="subject">Type Something...</label>
            <textarea id="subject" name="subject" placeholder="Write something.." style="height: 350px"></textarea>
            <input type="button" class="btn btn-success" value="Submit" name="ok" data-bs-toggle="modal" data-bs-target="#staticBackdrop"/>
          </form>
        </div>
    </div>
    </div>
    <div class="modal fade border" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog ">
    <div class="modal-content ">
      <div class="modal-header ">
        <h5 class="modal-title" id="staticBackdropLabel">Gator Gadget Store</h5>
      </div>
      <div class="modal-body">
        Thank you for contacting us </br>
        <div>
          <span class="d-inline">We will reply to your message soon</span>
        </div>
        <br>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
      </div>
  </div>
</div>
     <!--Footer-->
    <div class="card w-100" style="border: none;">
  
  <div class="card-body text-center bg-dark text-white ">
    <h5 class="card-title"><i>"Be Yourself and Never Surrender!"</i></h5>
    <h6 class="card-title"><i>JessNoLimit</i></h6>
    <p class="card-text">&copy; Gator Gadget Store 2021</p>
  </div>
<!--Akhir Footer-->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous" />
  </body>
</html>

<?php
if(isset($_POST['ok'])){
    if(empty($_POST['fname']) || empty($_POST['lname']) || empty($_POST['country']) || empty($_POST['subject'])){
        echo "Masukkan data";
    }else{
        $fname=$_POST['fname'];
        $lname=$_POST['lname'];
        $country=$_POST['country'];
        $subject=$_POST['subject'];
        $buka=fopen("hasil.html",'a');
        fwrite($buka,"Name : ${fname} <br> ");
        fwrite($buka,"Email : ${lname} <br> ");
        fwrite($buka,"Country : ${country} <br> ");
        fwrite($buka,"Subject : ${subject} <br> ");
        fwrite($buka,"<hr>");
        fclose($buka);

    }
}?>