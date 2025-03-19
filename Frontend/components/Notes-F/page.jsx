import { useState } from 'react';

const NotesFetcher = () => {
  const [branch, setBranch] = useState('');
  const [semester, setSemester] = useState('');
  const [subject, setSubject] = useState('');
  const [notesLink, setNotesLink] = useState('');

  const branches = ['CSE', 'ECE', 'EEE', 'ME', 'CE'];
  const semesters = ['1', '2', '3', '4', '5', '6', '7', '8'];

  const subjects = {
    CSE: {
      '3': {
        'Data Structures': 'https://drive.google.com/file/d/your-cse-data-structures-link/view',
        'DBMS': 'https://drive.google.com/file/d/your-cse-dbms-link/view',
      },
      '4': {
        'Algorithms': 'https://drive.google.com/file/d/your-cse-algorithms-link/view',
        'Operating Systems': 'https://drive.google.com/file/d/your-cse-os-link/view',
      },
    },
    ECE: {
      '3': {
        'Electronics': 'https://drive.google.com/file/d/your-ece-electronics-link/view',
        'Signals': 'https://drive.google.com/file/d/your-ece-signals-link/view',
      },
      '4': {
        'Communications': 'https://drive.google.com/file/d/your-ece-communications-link/view',
        'Digital Systems': 'https://drive.google.com/file/d/your-ece-digital-link/view',
      },
    },
  };

  const handleBranchChange = (e) => {
    setBranch(e.target.value);
    setSemester('');
    setSubject('');
    setNotesLink('');
  };

  const handleSemesterChange = (e) => {
    setSemester(e.target.value);
    setSubject('');
    setNotesLink('');
  };

  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
    setNotesLink(subjects[branch][semester][e.target.value]);
  };

  return (
    <div className='text-base-content'>
      <h1>Notes Fetcher</h1>
      <div>
        <label>
          Select Branch:
          <select value={branch} onChange={handleBranchChange}>
            <option value="">Select Branch</option>
            {branches.map((branch) => (
              <option key={branch} value={branch}>
                {branch}
              </option>
            ))}
          </select>
        </label>
      </div>
      {branch && (
        <div>
          <label>
            Select Semester:
            <select value={semester} onChange={handleSemesterChange}>
              <option value="">Select Semester</option>
              {semesters.map((sem) => (
                <option key={sem} value={sem}>
                  {sem}
                </option>
              ))}
            </select>
          </label>
        </div>
      )}
      {semester && subjects[branch] && subjects[branch][semester] && (
        <div>
          <label>
            Select Subject:
            <select value={subject} onChange={handleSubjectChange}>
              <option value="">Select Subject</option>
              {Object.keys(subjects[branch][semester]).map((subj) => (
                <option key={subj} value={subj}>
                  {subj}
                </option>
              ))}
            </select>
          </label>
        </div>
      )}
      {notesLink && (
        <div>
          <h2>Notes</h2>
          <iframe
            src={notesLink.replace('/view', '/preview')}
            title="Notes"
            width="600"
            height="400"
            allow="autoplay"
          />
        </div>
      )}
    </div>
  );
};

export default NotesFetcher;
