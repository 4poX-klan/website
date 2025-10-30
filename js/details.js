document.querySelectorAll('.details-close').forEach(button => {
    button.addEventListener('click', function() {
        const details = this.closest('details');
        const summary = details.querySelector('summary');
        details.removeAttribute('open');
        summary.scrollIntoView();
    });
});