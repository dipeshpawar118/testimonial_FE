import React from 'react'
import { images } from '../config/images'
import '../css/style.css'
import '../css/slick.css';
import '../css/default.css';
import '../css/LineIcons.css';
import '../css/magnific-popup.css';
import '../css/bootstrap.min.css'

export const Clients = () => {
    return (
<section class="client-logo-area">
<div class="container">
<div class="row">
<div class="col-md-3 col-6">
<div class="single-client mt-30 text-center">
<img src={images.Client1} alt="Logo" />
</div> 
</div>
<div class="col-md-3 col-6">
<div class="single-client mt-30 text-center">
<img src={images.Client2} alt="Logo" />
</div> 
</div>
<div class="col-md-3 col-6">
<div class="single-client mt-30 text-center">
<img src={images.Client3} alt="Logo" />
</div> 
</div>
<div class="col-md-3 col-6">
<div class="single-client mt-30 text-center">
<img src={images.Client4} alt="Logo" />
</div> 
 </div>
</div> 
</div> 
</section>
    )
}