/**
 * Payment integration placeholder.
 * ------------------------------------------------------------
 * The website is currently static, so no money is processed.
 * To accept online donations later (e.g. Razorpay):
 *
 * 1. Create an order on your server:  POST /api/create-order { amount }
 *    (Razorpay orders must be created server-side with your secret key.)
 * 2. Load the checkout script:  https://checkout.razorpay.com/v1/checkout.js
 * 3. Replace the body of `startDonation` with:
 *
 *    const rzp = new window.Razorpay({
 *      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
 *      amount: donation.amount * 100,      // in paise
 *      currency: 'INR',
 *      name: 'Green of Social Society',
 *      description: 'Donation',
 *      order_id: order.id,
 *      prefill: { name: donation.name, email: donation.email, contact: donation.phone },
 *      theme: { color: '#026236' },
 *      handler: (response) => { ... verify on server, show receipt ... },
 *    });
 *    rzp.open();
 *
 * Until then, it resolves with `{ status: 'not-configured' }` and the
 * Donate page shows offline donation instructions instead.
 */
export async function startDonation(donation) {
  void donation;
  return { status: 'not-configured' };
}
