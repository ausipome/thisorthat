import React from 'react';
import BlogTemplate from '../../components/BlogTemplate';

const Page = () => {
  const blogData = {
    title: "I’m Not Just About Tech – I’m About *Your* Tech",
    author: "Martyn Clinton",
    date: "May 6, 2025",
    image: "http://localhost:3000/love_laptop.png",
    content: `I didn’t start this to just sell tech—I started it because I *love* tech.
  
  I’ve spent years testing devices, building PCs, hunting for hidden gems, and helping friends and family figure out which laptop, phone, or tablet is right for them. Now, I want to do the same for you.
  
  **Because let’s be honest: buying tech can be overwhelming.** There’s so much noise out there—specs, sales, marketing fluff—and not enough real talk about what’s *actually* worth your money. That’s where I come in.
  
  I’m not here to upsell you or push the most expensive thing your budget can stretch to. In fact, I’ll often tell you that you don’t need to spend it all. Why pay more for features you’ll never use?
  
  And one thing I *really* love? Refurbished tech. I’m a big believer in getting the absolute best value out of your budget—and sometimes that means picking up a refurbished laptop or phone that performs like new for a fraction of the cost. I’ve bought and tested loads of them myself, and I know first-hand just how reliable and underrated they can be.
  
  Buying refurbished isn’t just smart financially—it’s also a more sustainable choice. It keeps perfectly good devices out of landfills and puts them back in the hands of people who’ll actually use and appreciate them. When it’s done right (and I’ll help make sure it is), refurbished tech can be one of the best decisions you make.
  
  **Choosing the right tech matters more than ever.** Whether you’re a student trying to make it through lectures and late-night essays, a professional juggling calls, meetings, and spreadsheets, or just someone who loves streaming, gaming, or creating—you deserve tech that fits you.
  
  Not just *any* device. The *right* one. The one that feels like it was made for the way you work, play, and live.
  
  That’s why I take the time to curate my selection. Every product I feature is something I believe in—something I’d recommend to a friend (and often *have*). I'm constantly researching, testing, and comparing so you don’t have to.
  
  **Explore the site.** Dive into the recommendations. Ask me questions. This isn’t just a shop—it’s a conversation. I’m here to help you find the perfect fit, not just the highest spec.   
  Got a question? DM me on TikTok or Insta, or shoot me an email—all the links are in the footer.
  
  Because tech should work *for* you—not the other way around.  
  And honestly? Helping you find the right gear is one of my favourite things to do.

  Let’s make tech personal again.`
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
