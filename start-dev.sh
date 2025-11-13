echo "Starting Svelte dev server..."
(cd client && npm run dev) &

echo "Starting Laravel API..."
php artisan serve