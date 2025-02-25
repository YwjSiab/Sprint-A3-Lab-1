// Part 1: Wait for DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');

    // Part 2: Text Manipulation
    const modifyText = () => {
        const textElement = document.getElementById('modifyText');
        try {
            textElement.textContent = 'Text has been modified!';
            console.log('Text modified successfully');
        } catch (error) {
            console.error('Error modifying text:', error);
        }
    };

    // Part 3: Element Manipulation
    const addElement = () => {
        const container = document.getElementById('elementContainer');
        const newElement = document.createElement('div');
        newElement.textContent = 'New Element';
        newElement.className = 'added-element';
        container.appendChild(newElement);
        console.log('Element added successfully');
    };

    const removeElement = () => {
        const container = document.getElementById('elementContainer');
        if (container.lastChild) {
            container.removeChild(container.lastChild);
            console.log('Element removed successfully');
        } else {
            console.warn('No elements to remove');
        }
    };

    // Part 4: Event Listeners
    document.getElementById('textBtn').addEventListener('click', modifyText);
    document.getElementById('addBtn').addEventListener('click', addElement);
    document.getElementById('removeBtn').addEventListener('click', removeElement);
});