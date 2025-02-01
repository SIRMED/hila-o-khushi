import React from 'react';
import { motion } from 'framer-motion';

export default function AnimateLetters({ text }: { text: string }) {
    const letters = text.split('');
    console.log(text, letters)

    return letters.map((letter, index) => {
        return <motion.span>
            {letter}
        </motion.span>
    })
}