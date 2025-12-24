const Contact = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold p-4 m-4">Contact Us page</h1>
      <div className="w-1/2">
      <form className="flex flex-col">
        <input type="text" placeholder="Name" className="p-2 m-2 border-2 border-black"/>
        <input type="email" placeholder="Email" className="p-2 m-2 border-2 border-black"/>
        <input type="text" placeholder="Message" className="p-2 m-2 border-2 border-black"/>
        <button type="submit" className="p-2 m-2 border-2 border-black bg-black text-white rounded-lg">Submit</button>
      </form>

      </div>
    </div>
  );
};

export default Contact;
