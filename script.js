document.addEventListener('DOMContentLoaded', () => {
    const ticketCards = document.querySelectorAll('.ticket-card');
    const selectedTierEl = document.getElementById('selected-tier');
    const ticketQtyEl = document.getElementById('ticket-qty');
    const totalPriceEl = document.getElementById('total-price');
    const btnMinus = document.getElementById('btn-minus');
    const btnPlus = document.getElementById('btn-plus');
    const btnCheckout = document.getElementById('btn-checkout');
    
    // Modal elements
    const modal = document.getElementById('success-modal');
    const btnCloseModal = document.getElementById('btn-close-modal');
    const modalTier = document.getElementById('modal-tier');
    
    let currentPrice = 120;
    let quantity = 1;
    let currentTier = 'VIP';

    function updateTotal() {
        const total = currentPrice * quantity;
        totalPriceEl.textContent = `$${total}`;
        selectedTierEl.textContent = `Pase ${currentTier}`;
        ticketQtyEl.textContent = quantity;
    }

    ticketCards.forEach(card => {
        card.addEventListener('click', () => {
            // Remove active from all
            ticketCards.forEach(c => {
                c.classList.remove('active');
                c.querySelector('.btn-select').textContent = 'Seleccionar';
            });
            // Add active to clicked
            card.classList.add('active');
            card.querySelector('.btn-select').textContent = 'Seleccionado';
            
            // Update values
            currentPrice = parseInt(card.getAttribute('data-price'));
            currentTier = card.getAttribute('data-tier');
            updateTotal();
        });
    });

    btnMinus.addEventListener('click', () => {
        if (quantity > 1) {
            quantity--;
            updateTotal();
        }
    });

    btnPlus.addEventListener('click', () => {
        if (quantity < 10) {
            quantity++;
            updateTotal();
        }
    });

    btnCheckout.addEventListener('click', () => {
        modalTier.textContent = `${quantity}x Pase ${currentTier}`;
        modal.classList.add('active');
    });

    btnCloseModal.addEventListener('click', () => {
        modal.classList.remove('active');
        // Reset 
        quantity = 1;
        updateTotal();
    });
});
