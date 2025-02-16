
import React, { useEffect, useState } from 'react';
import { Trash2 } from 'lucide-react';

interface Message {
  id: number;
  name: string;
  email: string;
  message: string;
  created_at: string;
}

const Dashboard = ({ token }: { token: string }) => {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const response = await fetch('/api/messages', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      if (response.ok) {
        const data = await response.json();
        setMessages(data);
      }
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Contact Messages
        </h1>
        
        <div className="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-lg">
          {messages.map((message) => (
            <div
              key={message.id}
              className="border-b border-gray-200 dark:border-gray-700 p-6"
            >
              <div className="flex justify-between items-start">
                <div className="space-y-2">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                    {message.name}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {message.email}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mt-2">
                    {message.message}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {new Date(message.created_at).toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
          ))}
          
          {messages.length === 0 && (
            <div className="text-center py-8 text-gray-500 dark:text-gray-400">
              No messages yet
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
