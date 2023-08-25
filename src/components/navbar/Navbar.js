import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <>
    <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          
          
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Be Our Partner
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Grab Driver</a></li>
              <li><a class="dropdown-item" href="#">Food Delivery Driver</a></li>
              <li><a class="dropdown-item" href="#">Express Delivery Driver</a></li>
              <li><a class="dropdown-item" href="#">Food / Mart Merchant</a></li>
              <li><a class="dropdown-item" href="#">Pay Merchant</a></li>
            </ul>
          </li>

          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#">Help Center</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              About
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">About Us</a></li>
              <li><a class="dropdown-item" href="#">Inside Grab</a></li>
              <li><a class="dropdown-item" href="#">Investor Relations</a></li>
              <li><a class="dropdown-item" href="#">Locations</a></li>
              <li><a class="dropdown-item" href="#">Sustainability</a></li>
              <li><a class="dropdown-item" href="#">Newsroom</a></li>
              <li><a class="dropdown-item" href="#">Grab Financial Group</a></li>
              <li><a class="dropdown-item" href="#">GrabForGood Fund</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Consumer
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Airport Guides</a></li>
              <li><a class="dropdown-item" href="#">Rides</a></li>
              <li><a class="dropdown-item" href="#">GrabFood</a></li>
              <li><a class="dropdown-item" href="#">GrabMart</a></li>
              <li><a class="dropdown-item" href="#">GrabExpress</a></li>
              <li><a class="dropdown-item" href="#">GrabRewards</a></li>
              <li><a class="dropdown-item" href="#">GrabGifts</a></li>
              <li><a class="dropdown-item" href="#">Financial services</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Driver
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Help Center</a></li>
              <li><a class="dropdown-item" href="#">What's New</a></li>
              <li><a class="dropdown-item" href="#">Drive with us</a></li>
              <li><a class="dropdown-item" href="#">Financial services</a></li>
              <li><a class="dropdown-item" href="#">Driver Centre</a></li>
              <li><a class="dropdown-item" href="#">GrabAcademy</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Merchant
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Help Center</a></li>
              <li><a class="dropdown-item" href="#">What's New</a></li>
              <li><a class="dropdown-item" href="#">Partner with us</a></li>
              <li><a class="dropdown-item" href="#">Financial services</a></li>
              <li><a class="dropdown-item" href="#">Financial resources</a></li>
              <li><a class="dropdown-item" href="#">GrabExpress</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Enterprise
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">What's New</a></li>
              <li><a class="dropdown-item" href="#">Grab for Business</a></li>
              <li><a class="dropdown-item" href="#">GrabAds</a></li>
              <li><a class="dropdown-item" href="#">GrabGifts</a></li>
              <li><a class="dropdown-item" href="#">GrabFinance</a></li>
              <li><a class="dropdown-item" href="#">GrabExpress</a></li>
              <li><a class="dropdown-item" href="#">GrabDefence</a></li>
              <li><a class="dropdown-item" href="#">GrabMaps</a></li>
            </ul>
          </li>
          
          
        </ul>
        
      </div>
    </div>
  </nav>
    </>
  )
}

export default Navbar