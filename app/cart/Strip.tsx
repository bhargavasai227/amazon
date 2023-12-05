import getStripe from '../../strip'
async function handleCheckout() {
    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout({
      lineItems: [
        {
          price: process.env.NEXT_PUBLIC_STRIPE_PRICE_ID,
          quantity: 1,
        },
      ],
      mode: 'subscription',
      successUrl: `https://amazon-rwjj.vercel.app/`,
      cancelUrl: `https://amazon-rwjj.vercel.app/cancel`,
      customerEmail: 'customer@email.com',
    });
    console.warn(error.message);
  }

  export default function Stripe(){
    return <div><button className='rounded-[2.2rem] w-32 h-16 max-h-24 relative  bottom-[-3] bg-orange-500 m-11 p-4 ' onClick={handleCheckout}>STRIPE</button>
          <p className='p-4 m-5'>pay using stripe </p>
          </div>
  }