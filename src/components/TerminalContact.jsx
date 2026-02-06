import React, { useState } from 'react';

const TerminalContact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('IDLE'); 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('SENDING');
    setTimeout(() => setStatus('SENT'), 2000);
  };

  return (
    <div className="w-full h-full font-mono text-sm bg-black p-4 flex flex-col">
      <div className="flex items-center gap-2 border-b border-gray-800 pb-2 mb-4">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
        <span className="ml-2 text-gray-500 text-xs">abhay@portfolio:~/contact-me</span>
      </div>

      <div className="flex-1 overflow-y-auto text-green-400">
        {status === 'SENT' ? (
          <div className="animate-pulse text-green-300">
            <p> Packet sent successfully.</p>
            <p> Abhay will respond shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col md:flex-row md:items-center gap-2">
              <label className="text-blue-400 whitespace-nowrap">root@user:~$ name --set</label>
              <input type="text" name="name" required value={formData.name} onChange={handleChange}
                className="bg-transparent border-b border-gray-700 text-white focus:border-green-500 focus:outline-none w-full py-1" />
            </div>
            <div className="flex flex-col md:flex-row md:items-center gap-2">
              <label className="text-blue-400 whitespace-nowrap">root@user:~$ email --set</label>
              <input type="email" name="email" required value={formData.email} onChange={handleChange}
                className="bg-transparent border-b border-gray-700 text-white focus:border-green-500 focus:outline-none w-full py-1" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-blue-400">root@user:~$ message --write</label>
              <textarea name="message" required value={formData.message} onChange={handleChange} rows="3"
                className="bg-gray-900/50 border border-gray-700 text-white p-3 focus:border-green-500 focus:outline-none w-full rounded" />
            </div>
            <button type="submit" disabled={status === 'SENDING'}
              className="mt-4 border border-green-500 text-green-500 px-6 py-2 hover:bg-green-500 hover:text-black transition-colors duration-300 uppercase text-xs font-bold">
              {status === 'SENDING' ? '> TRANSMITTING...' : '> EXECUTE_SEND'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default TerminalContact;
