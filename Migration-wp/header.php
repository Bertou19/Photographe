<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta
    description="Charles Cantin-Photographe. Je capture les moments de votre vie pour en faire un souvenir exceptionnel.">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
    integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
  <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/style.css" type="text/css" media="all" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css">
  <title>Charles Cantin-Photographe</title>
  <?php wp_head(); ?>
</head>

<body>

  <!-- Navbar -->
  <header class="header">
    <nav class="navbar navbar-expand-lg bg-light fixed-top p-3">
      <div class="container-fluid">
        <a href="index.html" class="navbar-brand p-0 me-0"><img class="logo d-block" height="130" width="130"
            src="logo-photographe.png" alt="logo"></a>

        <button class="navbar-toggler navbar-toggler-right text-dark" type="button" data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list"
            viewBox="0 0 16 16">
            <path fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
          </svg>
        </button>

        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Charles Cantin</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li class="nav-item text-decoration-underline">
                <a href="index.html" class="nav-link link-secondary">Accueil</a>
              </li>
              <li class="nav-item"><a href="galerie.html" class="nav-link text-dark">Galerie</a>
              </li>
              <li class="nav-item"><a href="tarifs.html" class="nav-link text-dark">Prestations/Tarifs</a>
              </li>
              <li class="nav-item"><a href="contact.html" class="nav-link text-dark">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </header>