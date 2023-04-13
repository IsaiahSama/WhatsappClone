import React, { useState, useEffect } from "react";
import "./SidebarChat.css";
import { Avatar } from "@mui/material";
import {
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
} from "@firebase/firestore";
import { db } from "./firebase";
import { Link } from "react-router-dom";

function SidebarChat({ id, name, addNewChat }) {
  const [seed, setSeed] = useState("");
  const [messages, setMessages] = useState("");

  const createChat = () => {
    const roomName = prompt("Please enter name for chat");

    if (roomName) {
      // Create chat in the database.
      const roomRef = collection(db, "rooms");
      addDoc(roomRef, { name: roomName });
    }
  };

  useEffect(() => {
    if (id) {
      const roomRef = collection(db, "rooms", id, "messages");
      const q = query(roomRef, orderBy("timestamp", "desc"));
      onSnapshot(q, (snapshot) =>
        setMessages(snapshot.docs.map((doc) => doc.data()))
      );
    }
  }, [id]);

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  return !addNewChat ? (
    <Link to={`/rooms/${id}`}>
      <div className="sidebarChat">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="sidebarChat__info">
          <h2>{name}</h2>
          <p>{messages[0]?.message}</p>
        </div>
      </div>
    </Link>
  ) : (
    <div onClick={createChat} className="sidebarChat">
      <h2>Add new Chat</h2>
    </div>
  );
}

export default SidebarChat;
