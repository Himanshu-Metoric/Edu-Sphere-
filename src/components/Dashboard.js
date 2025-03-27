import React, { useState } from 'react';
import { ref, uploadBytes } from 'firebase/storage';
import { Files_Upload } from './firebase'; // Ensure correct Firebase storage reference
import { v4 } from 'uuid';

function Dashboard() {
  const [file, setFile] = useState(null);
  const [folder, setFolder] = useState("page1"); // Default folder selection
  const [uploading, setUploading] = useState(false);

  const handleClick = async () => {
    if (file) {
      setUploading(true);
      const fileRef = ref(Files_Upload, `${folder}/${v4()}-${file.name}`);
      try {
        await uploadBytes(fileRef, file);
        alert("File uploaded successfully to " + folder);
        setFile(null);
        // Reset the file input
        const fileInput = document.querySelector('input[type="file"]');
        if (fileInput) fileInput.value = '';
      } catch (error) {
        console.error("Upload failed:", error);
        alert("Upload failed, please try again.");
      } finally {
        setUploading(false);
      }
    } else {
      alert("Please select a file first!");
    }
  };

  return (
    <div className='Dashboard'>
      <h2>Upload PDF Documents</h2>

      {/* Instruction Manual */}
      <div className="instruction-manual">
        <h3>Disclaimer:</h3>
        <p>If you want to submit assignments, select the correct destination:</p>
        <ul>
          <li><b>Introduction to Programming & Data Structures and Algorithms</b> → Page 1</li>
          <li><b>Artificial Intelligence & Machine Learning</b> → Page 2</li>
          <li><b>Engineering Clinics & Software Engineering</b> → Page 3</li>
          <li><b>Discrete Maths & Graph Theory</b> → Page 4</li>
          <li><b>Ethics and Values</b> → Page 5</li>
          <li><b>Numerical Ability & Quantitative Methods</b> → Page 6</li>
          <li><b>Cognitive Intelligence & Optimization Techniques</b> → Page 7</li>
        </ul>
        <p><b>Important:</b> Submissions to incorrect destinations will be discarded, and no marks shall be allocated.</p>
      </div>

      <div className="upload-container">
        <div className="form-group">
          <label htmlFor="folder-select">Select Destination Folder:</label>
          <select 
            id="folder-select"
            value={folder} 
            onChange={(e) => setFolder(e.target.value)}
          >
            <option value="page1">Page 1</option>
            <option value="page2">Page 2</option>
            <option value="page3">Page 3</option>
            <option value="page4">Page 4</option>
            <option value="page5">Page 5</option>
            <option value="page6">Page 6</option>
            <option value="page7">Page 7</option>
          </select>
        </div>
        
        <div className="form-group">
          <label htmlFor="file-upload">Choose PDF File:</label>
          <input
            id="file-upload"
            type='file'
            accept=".pdf"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>

        <button 
          onClick={handleClick}
          disabled={uploading}
        >
          {uploading ? 'Uploading...' : 'Upload PDF'}
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
