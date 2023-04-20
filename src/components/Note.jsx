import React, { useState } from 'react';
import Draggable from 'react-draggable';
import {
  faArrowsUpDownLeftRight, faTrashCan, faPenToSquare, faCheck,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

export default function Note({
  id, title, text, x, y, zIndex, handleDelete, handleEdit,
}) {
  const [isEditing, setIsEditing] = useState(false);

  // handles drag
  const handleDrag = (e, data) => {
    handleEdit(id, { x: data.x, y: data.y });
  };

  // renders body of note
  const renderBody = () => {
    if (isEditing) {
      return (
        <textarea className="d-block" value={text} onChange={(e) => { handleEdit(id, { text: e.target.value }); }} />
      );
    } else {
      return (
        <ReactMarkdown>
          {text}
        </ReactMarkdown>
      );
    }
  };

  return (
    <Draggable
      bounds=".notesWrapper"
      handle=".drag"
      grid={[10, 10]}
      position={{
        x, y,
      }}
      onDrag={handleDrag}
    >
      <div id="note">
        <div className="d-flex mb-3 justify-content-between">
          <h2 className="my-0 ms-0 me-4">{title}</h2>
          <div className="d-flex">
            <div className="drag me-3 d-flex align-items-center">
              <FontAwesomeIcon
                style={{
                  fontSize: 18,
                }}
                icon={faArrowsUpDownLeftRight}
              />
            </div>
            <div
              className="me-3 d-flex align-items-center"
              role="button"
              tabIndex="0"
              onClick={() => { setIsEditing(!isEditing); }}
            >
              <FontAwesomeIcon
                style={{
                  fontSize: 18,
                }}
                icon={isEditing ? faCheck : faPenToSquare}
              />
            </div>
            <div
              className="d-flex align-items-center"
              role="button"
              tabIndex="-1"
              onClick={() => {
                handleDelete(id);
              }}
            >
              <FontAwesomeIcon
                style={{
                  fontSize: 18,
                }}
                icon={faTrashCan}
              />
            </div>
          </div>
        </div>
        {renderBody()}
      </div>
    </Draggable>
  );
}
