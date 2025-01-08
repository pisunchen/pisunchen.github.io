import React, { useEffect } from "react";

const RotatingWords = () => {
    useEffect(() => {
        let words = document.querySelectorAll(".word");
        words.forEach((word) => {
            // Split the text content into characters, including spaces
            let letters = word.textContent.split("").map((letter) =>
                letter === " " ? "\u00A0" : letter
            );
            word.textContent = "";
            letters.forEach((letter) => {
                let span = document.createElement("span");
                span.textContent = letter;
                span.className = "letter";
                word.append(span);
            });
        });

        let currentWordIndex = 0;
        let maxWordIndex = words.length - 1;
        words[currentWordIndex].style.opacity = "1";

        let rotateText = () => {
            let currentWord = words[currentWordIndex];
            let nextWord =
                currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];
            Array.from(currentWord.children).forEach((letter, i) => {
                setTimeout(() => {
                    letter.className = "letter out";
                }, i * 80);
            });
            nextWord.style.opacity = "1";
            Array.from(nextWord.children).forEach((letter, i) => {
                letter.className = "letter behind";
                setTimeout(() => {
                    letter.className = "letter in";
                }, 340 + i * 80);
            });
            currentWordIndex =
                currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
        };

        const initialDelay = 2000;
        setTimeout(() => {
            rotateText();
            setInterval(rotateText, 4000);
        }, initialDelay);

        return () => clearInterval(initialDelay);
    }, []);

    return (
        <div className="rotating-text">
        <p>Hello,</p>
        <p>I'm Pisun</p>
        <p>
            <span className="word w-2">A software developer</span>
            <span className="word w-3">A coffee enthusiast</span>
            <span className="word w-4">A foodie</span>
            <span className="word w-5">A hiker</span>
        </p>
    </div>
    );
};

export default RotatingWords;
