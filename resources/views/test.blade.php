<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>

<body>
    <div class="world">
        <div class="flag">
            
            <div class="red" style="animation-delay: calc(-0.6s * 1)">
                <div class="red ch" style="animation-delay: calc(-0.6s * 2)">
                    <div class="red ch" style="animation-delay: calc(-0.6s * 3)">
                        <div class="red ch" style="animation-delay: calc(-0.6s * 4)s">
                            <div class="red ch" style="animation-delay: calc(-0.6s * 5)s">
                                <div class="red ch" style="animation-delay: calc(-0.6s * 6)s">
                                    <div class="red ch" style="animation-delay: calc(-0.6s * 7)s">
                                        <div class="red ch" style="animation-delay: calc(-0.6s * 8)s">
                                            Farid
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="white" style="animation-delay: calc(-0.6s * 1)">
                <div class="white ch" style="animation-delay: calc(-0.6s * 2)">
                    <div class="white ch" style="animation-delay: calc(-0.6s * 3)">
                        <div class="white ch" style="animation-delay: calc(-0.6s * 4)s">
                            <div class="white ch" style="animation-delay: calc(-0.6s * 5)s">
                                <div class="white ch" style="animation-delay: calc(-0.6s * 6)s">
                                    <div class="white ch" style="animation-delay: calc(-0.6s * 7)s">
                                        <div class="white ch" style="animation-delay: calc(-0.6s * 8)s">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="rod"></div>
        </div>
        <div class="flag">
            
            <div class="red" style="animation-delay: calc(-0.6s * 1)">
                <div class="red ch" style="animation-delay: calc(-0.6s * 2)">
                    <div class="red ch" style="animation-delay: calc(-0.6s * 3)">
                        <div class="red ch" style="animation-delay: calc(-0.6s * 4)s">
                            <div class="red ch" style="animation-delay: calc(-0.6s * 5)s">
                                <div class="red ch" style="animation-delay: calc(-0.6s * 6)s">
                                    <div class="red ch" style="animation-delay: calc(-0.6s * 7)s">
                                        <div class="red ch" style="animation-delay: calc(-0.6s * 8)s">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="white" style="animation-delay: calc(-0.6s * 1)">
                <div class="white ch" style="animation-delay: calc(-0.6s * 2)">
                    <div class="white ch" style="animation-delay: calc(-0.6s * 3)">
                        <div class="white ch" style="animation-delay: calc(-0.6s * 4)s">
                            <div class="white ch" style="animation-delay: calc(-0.6s * 5)s">
                                <div class="white ch" style="animation-delay: calc(-0.6s * 6)s">
                                    <div class="white ch" style="animation-delay: calc(-0.6s * 7)s">
                                        <div class="white ch" style="animation-delay: calc(-0.6s * 8)s">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="rod"></div>
        </div>
    </div>
</body>
<style>
    body {
        background: rgb(226, 226, 226);
    }

    .world {
        display: flex;
        width: 100%;
        height: 100vh;
        justify-content: center;
        align-items: center;
        perspective: 1000px;
    }

    @keyframes wave {
        0% {
            transform: rotateX(0deg) rotateY(-30deg) rotateZ(0deg);
        }

        100% {
            transform: rotateX(0deg) rotateY(30deg) rotateZ(0deg);
        }
    }

    .flag {
        width: 300px;
        height: 200px;
        position: relative;
        perspective: 1000px;
        transform: rotateX(30deg);
        transform-style: preserve-3d;


    }
    .rod{
        width: 10px;
        height: 500px;
        background: brown;
    }

    .red,
    .white {
        width: 30px;
        height: 100px;
        animation: wave 2s ease-in-out infinite;
        animation-direction: alternate;
        transform-origin: 0% 50%;
        transform-style: preserve-3d;


    }

    .ch {
        position: absolute;
        left: 100%;
        top: 0;
    }

    .red {
        background: red
    }

    .white {
        background: white
    }
</style>

</html>
