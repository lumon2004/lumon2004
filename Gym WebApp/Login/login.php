<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Homepage</title>
    <link href="login.css" rel="stylesheet">
    <link href="gym.css" rel="stylesheet">
</head>
<body>
    <script src="login.js"></script>
    <script src="gym.js"></script>
    <header>
        <h1>Fitness</h1>
    </header>
    <h1>
        <?php 
            function welcome() {
                if ($_POST["genere"] === 'maschio' || $_POST["genere"] === 'unset') {
                echo 'Benvenuto';
                } else if ($_POST["genere"] == 'femmina') {
                    echo 'Benvenuta';
                } // "genere" è il name="" del select mentre 'maschio' etc è il value delle option
            };
            welcome();
            echo " ".$_POST['nome']; // 'nome' è il name="" NON l'id=""
        ?>
    </h1>
    <h3>Questo è il tuo nuovo profilo!</h3>
    <main>
        <div class="blocchi"> <!-- Scheda -->
            <a href="scheda.html">
                <h1>Scheda</h1>
            </a>
        </div>
        <div class="blocchi"> <!-- Dieta -->
            <a href="dieta.html">
                <h1>Dieta</h1>
            </a>
        </div>
        <div class="blocchi"> <!-- Calendario (spesa/allenamento) -->
            <a href="calendario.html">
                <h1>Calendario</h1>
            </a>
        </div>
    </main>
</body>
</html>
