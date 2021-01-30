function start() {
    const introHeroElem = document.createElement("div");
    const logo = document.createElement("div");

    introHeroElem.classList.add("intro-hero");
    logo.classList.add("logo");
    logo.classList.add("enter");

    introHeroElem.appendChild(logo);

    setTimeout(() => {
        logo.classList.remove("enter");
        logo.classList.add("exit");
        setTimeout(() => {
            introHeroElem.classList.add("exit");
            setTimeout(() => {
                document.body.removeChild(introHeroElem);
                startText();
            }, 100);
        }, 600);
    }, 1000);

    document.body.appendChild(introHeroElem);
}
start();

function startText() {

    const title = "¡Feliz cumpleaños tía!",
        text = `Muy feliz cumpleaños tía, muchas felicidades, hoy es un día especial para toda la familia. Hoy es motivo para celebrar, aunque no haya pasado, cada uno de nosotros está contigo. 

Toda la familia disfruta de un día más de Marta (sin h), te deseamos años de vida, prosperidad, éxito, felicidad y mucho amor el resto de tus días por la calidad de persona que irradias cada día.
	
Eres alguien que marca diferencia, especial entre todos nosotros; eres humana, sensible y de grandes sentimientos.

Quizás no es mucho este pequeño detalle, pero lo hacemos con todo el corazón y aprecio hacia a ti. Siempre nos has dado lo mejor de tu persona, estamos muy felices y contentos de contar con tu compañía, has cambiado nuestra familia de forma radical, y todo ha sido para el bienestar, porque tú, tía, denotas eso. 

¡Muchas felicidades y muy pronto estaremos dando el abrazo!.

- Tu familia que te quiere (Ángeles, Fidencio, Edmundo, Jacqueline, Andrea y Eduardo).`;

    function typer(elem, text, speed = 200, callback = false) {
        let index = 0;

        const pointer = document.createElement("span");

        pointer.classList.add("pointer");

        pointer.classList.add("write");

        const type = () => {
            const letters = text.length - (index + 1);

            if (text[index] == " ") {
                pointer.classList.add("space");

                pointer.classList.remove("letter");

                pointer.innerText = ".";
            } else {
                pointer.classList.add("letter");

                pointer.classList.remove("space");

                pointer.innerText = text[index];
            }

            elem.innerText = text.slice(0, index);

            elem.appendChild(pointer);

            if (letters == 0) {
                pointer.classList.remove("write");

                pointer.classList.add("wait");

                elem.innerText = text;

                pointer.innerText = ".";

                elem.appendChild(pointer);

                if (callback) callback();
                return;
            }

            index++;
            window.scroll(0, elem.scrollHeight);

            setTimeout(type, speed);
        };

        setTimeout(type, speed);
    }

    const header = document.querySelector("h1");

    const mainText = document.querySelector("p");

    const speed = 70;

    const mainElem = document.querySelector('main');

    function end() {
        const hideTextButton = document.createElement('button');
        let clicked = false;
        hideTextButton.innerText = 'Ocultar texto'
        hideTextButton.classList.add('hideTextButton');
        hideTextButton.addEventListener('click', e => {
            clicked = !clicked;
            mainElem.classList.toggle('no-display');
            mainText.classList.toggle('no-display');
            header.classList.toggle('no-display');
            hideTextButton.innerText = clicked ? 'Mostrar texto' : 'Ocultar texto';
        })

        mainElem.appendChild(hideTextButton);
    }

    typer(header, title, speed);

    typer(mainText, text, speed, end)
}