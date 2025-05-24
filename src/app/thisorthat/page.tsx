import React from 'react';

import BlogTemplate from '../../components/BlogTemplate';

const Page = () => {
  const blogData = {
    title:
      'We’ve loved tech since the primates first upgraded from sticks to stones.',
    author: 'MC',
    date: 'May 6, 2025',
    image:
      'https://s3.eu-west-2.amazonaws.com/thisorthat.tech/images/blog/love_laptop.png',
    content: `This isn’t just about selling tech—it’s about a genuine love for it.

We’ve spent years testing devices, building PCs, hunting for hidden gems, and helping friends, family, and anyone who’ll listen figure out which laptop, phone, or tablet actually makes sense for them. Now, we want to do the same for you.

Because let’s be honest: buying tech can be overwhelming. There’s a lot of noise—specs, sales, marketing jargon—and not nearly enough real talk about what’s actually worth your money. That’s where we come in.

We’re not here to upsell you or push the priciest gear your wallet can barely stretch to. In fact, we’ll often tell you to spend less. Why pay for features you’ll never use?

And one thing we really love? Refurbished tech. We’re big believers in getting maximum value out of your budget—and often, that means choosing a refurbished laptop or phone that performs like new for a fraction of the cost. We’ve tested tons ourselves and can vouch for just how reliable (and underrated) they can be.

Buying refurbished isn’t just smart—it’s sustainable. It keeps perfectly good devices out of landfills and puts them back in the hands of people who’ll actually use and appreciate them. When it’s done right (and we’ll help make sure it is), refurbished tech can be one of the best decisions you make.

Choosing the right tech matters more than ever. Whether you’re a student powering through lectures, a professional juggling spreadsheets and video calls, or just someone who loves streaming, gaming, or creating—you deserve tech that fits you.

Not just any device. The right one. The one that feels like it was made for the way you work, play, and live.

That’s why we take the time to carefully curate our selection. Every product we feature is something we genuinely believe in—something we’d recommend to a friend (and often have). We’re constantly researching, testing, and comparing so you don’t have to.

Explore the site. Dive into the recommendations. Ask us questions. This isn’t just a shop—it’s a conversation. We’re here to help you find the perfect fit, not just the highest spec.
Got a question? DM us on TikTok or Insta, or shoot us an email—all the links are in the footer.

Because tech should work for you—not the other way around.
And honestly? Helping you find the right gear is one of our favourite things to do.`,
  };

  return (
    <div>
      <BlogTemplate
        title={blogData.title}
        author={blogData.author}
        date={blogData.date}
        content={blogData.content}
        image={blogData.image}
      />
    </div>
  );
};

export default Page;
