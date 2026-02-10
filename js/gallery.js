// Gallery JavaScript
        let currentImageIndex = 0;
        const galleryItems = document.querySelectorAll('.gallery-item');
        
        function openLightbox(index) {
            currentImageIndex = index;
            const item = galleryItems[index];
            const img = item.querySelector('img');
            const title = item.querySelector('.gallery-overlay h3')?.textContent || '';
            const description = item.querySelector('.gallery-overlay p')?.textContent || '';
            
            document.getElementById('lightboxImage').src = img.src;
            document.getElementById('lightboxCaption').textContent = title + (description ? ' - ' + description : '');
            document.getElementById('lightbox').classList.add('active');
            document.body.style.overflow = 'hidden';
        }
        
        function closeLightbox(event) {
            if (event.target === event.currentTarget || event.target.classList.contains('lightbox-close')) {
                document.getElementById('lightbox').classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        }
        
        function navigateLightbox(direction, event) {
            event.stopPropagation();
            currentImageIndex += direction;
            
            if (currentImageIndex < 0) {
                currentImageIndex = galleryItems.length - 1;
            } else if (currentImageIndex >= galleryItems.length) {
                currentImageIndex = 0;
            }
            
            const item = galleryItems[currentImageIndex];
            const img = item.querySelector('img');
            const title = item.querySelector('.gallery-overlay h3')?.textContent || '';
            const description = item.querySelector('.gallery-overlay p')?.textContent || '';
            
            document.getElementById('lightboxImage').src = img.src;
            document.getElementById('lightboxCaption').textContent = title + (description ? ' - ' + description : '');
        }
        
        // Keyboard navigation
        document.addEventListener('keydown', function(e) {
            const lightbox = document.getElementById('lightbox');
            if (lightbox.classList.contains('active')) {
                if (e.key === 'Escape') {
                    lightbox.classList.remove('active');
                    document.body.style.overflow = 'auto';
                } else if (e.key === 'ArrowLeft') {
                    navigateLightbox(-1, e);
                } else if (e.key === 'ArrowRight') {
                    navigateLightbox(1, e);
                }
            }
        });