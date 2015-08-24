<!DOCTYPE html>
<html lang="en">
    <head>
    <!--
       - This Source Code Form is subject to the terms of the Mozilla Public
       - License, v. 2.0. If a copy of the MPL was not distributed with this
       - file, You can obtain one at http://mozilla.org/MPL/2.0/.
       -->
        <title><%= title %></title>
        <link rel="stylesheet" href="/stylesheets/screen.css" />
        <link rel='stylesheet' type='text/css' href="https://famo.us/lib/famous/famous.css" />
    </head>
    <body>
        <script src='/party/jspm/system.src.js'></script>
        <script src='jspm_config.js'></script>
        <script type="module">
            System.paths['js/*'] = 'javascripts/*/main.js';
            System.import('js/passwordReveal');
        </script>
    </body>
</html>
