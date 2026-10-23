import React, { useState } from 'react';

export default function EnactusEvaluationSystem() {
  const [currentUserRole, setCurrentUserRole] = useState('board'); // 'board' or 'hr_leader'
  const [activeTab, setActiveTab] = useState('evaluation');

  // Committees & Technical Criteria Setup
  const committees = [
    { id: 'pm', name: 'Project Management (PM)', leaderUser: 'pm_leader', leaderPass: '1234', criteria: [
      { id: 1, nameEn: 'Research & Problem Identification', nameAr: 'البحث وتحديد المشكلة' },
      { id: 2, nameEn: 'Research Quality & Validation', nameAr: 'جودة البحث والتأكد من صحة المعلومات' },
      { id: 3, nameEn: 'Project Planning & Documentation', nameAr: 'تخطيط المشروع وتوثيق المعلومات' },
      { id: 4, nameEn: 'Task Execution & Deliverables', nameAr: 'تنفيذ التاسكات وتسليم المطلوب' },
      { id: 5, nameEn: 'Critical Thinking & Problem Solving', nameAr: 'التفكير النقدي وحل المشكلات' },
      { id: 6, nameEn: 'Project Development & Practical Contribution', nameAr: 'تطوير المشروع والمساهمة العملية' }
    ]},
    { id: 'pr', name: 'Public Relations (PR)', leaderUser: 'pr_leader', leaderPass: '1234', criteria: [
      { id: 1, nameEn: 'Communication & Negotiation', nameAr: 'التواصل والتفاوض' },
      { id: 2, nameEn: 'Sponsorship Research & Prospecting', nameAr: 'البحث عن الرعاة والجهات المحتملة' },
      { id: 3, nameEn: 'Outreach & Follow-up', nameAr: 'التواصل والمتابعة مع الجهات' },
      { id: 4, nameEn: 'Partnership Development', nameAr: 'تطوير الشراكات' },
      { id: 5, nameEn: 'Proposal & Pitch Quality', nameAr: 'جودة العروض والبروبوزال' },
      { id: 6, nameEn: 'Task Execution & Reporting', nameAr: 'تنفيذ التاسكات ورفع التقارير' }
    ]},
    { id: 'hr', name: 'Human Resources (HR)', leaderUser: 'hr_leader', leaderPass: '1234', criteria: [
      { id: 1, nameEn: 'HR Knowledge & Application', nameAr: 'معرفة أساسيات الـ HR وتطبيقها' },
      { id: 2, nameEn: 'Recruitment & Interviewing', nameAr: 'الريكروتمنت وإجراء الانترفيوز' },
      { id: 3, nameEn: 'Data Management & Documentation', nameAr: 'إدارة البيانات والتوثيق' },
      { id: 4, nameEn: 'Member Follow-up & Evaluation', nameAr: 'متابعة الأعضاء وتقييمهم' },
      { id: 5, nameEn: 'Conflict Handling & Fairness', nameAr: 'التعامل مع الخلافات والعدل بين الأعضاء' },
      { id: 6, nameEn: 'Confidentiality & Professional HR Practice', nameAr: 'الحفاظ على السرية والالتزام بأخلاقيات الـ HR' }
    ]},
    { id: 'media', name: 'Media Committee', leaderUser: 'media_leader', leaderPass: '1234', criteria: [
      { id: 1, nameEn: 'Content Creation & Copywriting', nameAr: 'صناعة المحتوى وكتابة الكابشنز' },
      { id: 2, nameEn: 'Design / Editing Quality', nameAr: 'جودة التصميم أو المونتاج' },
      { id: 3, nameEn: 'Branding & Visual Consistency', nameAr: 'الالتزام بالهوية البصرية' },
      { id: 4, nameEn: 'Content Planning & Execution', nameAr: 'تخطيط المحتوى وتنفيذه' },
      { id: 5, nameEn: 'Creativity & Audience Relevance', nameAr: 'الإبداع ومناسبة المحتوى للجمهور' },
      { id: 6, nameEn: 'Technical Skills & File Management', nameAr: 'المهارات التقنية وتنظيم الملفات' }
    ]},
    { id: 'presentation', name: 'Presentation Committee', leaderUser: 'pres_leader', leaderPass: '1234', criteria: [
      { id: 1, nameEn: 'Presentation Structure & Storytelling', nameAr: 'تنظيم العرض وتسلسل الأفكار' },
      { id: 2, nameEn: 'Research & Content Accuracy', nameAr: 'البحث ودقة المحتوى' },
      { id: 3, nameEn: 'Slide Design & Visual Communication', nameAr: 'تصميم السلايدز والتواصل البصري' },
      { id: 4, nameEn: 'Public Speaking & Delivery', nameAr: 'الإلقاء وطريقة التقديم' },
      { id: 5, nameEn: 'Persuasion & Audience Engagement', nameAr: 'الإقناع والتفاعل مع الجمهور' },
      { id: 6, nameEn: 'Rehearsal, Feedback & Improvement', nameAr: 'التدريب وتطبيق الفيدباك والتطوير' }
    ]},
    { id: 'oc', name: 'Organizing Committee (OC)', leaderUser: 'oc_leader', leaderPass: '1234', criteria: [
      { id: 1, nameEn: 'Event Planning & Preparation', nameAr: 'تخطيط الإيفنت والتحضير له' },
      { id: 2, nameEn: 'Logistics & Resource Management', nameAr: 'تنظيم اللوجستيات وإدارة الموارد' },
      { id: 3, nameEn: 'Coordination & Task Distribution', nameAr: 'التنسيق وتوزيع التاسكات' },
      { id: 4, nameEn: 'On-ground Execution', nameAr: 'التنفيذ على أرض الواقع' },
      { id: 5, nameEn: 'Contingency Planning & Problem Solving', nameAr: 'الخطة البديلة وحل المشكلات' },
      { id: 6, nameEn: 'Post-event Reporting & Organization', nameAr: 'التنظيم ورفع التقرير بعد الإيفنت' }
    ]}
  ];

  // Personal Criteria (40 marks total, 8 items * 5 marks)
  const personalCriteria = [
    { id: 1, nameAr: 'الالتزام بالحضور والمواعيد' },
    { id: 2, nameAr: 'الالتزام بالتاسكات وتحمل المسؤولية' },
    { id: 3, nameAr: 'التفاعل المطلوب على السوشيال ميديا' },
    { id: 4, nameAr: 'احترام التسلسل الإداري والتعامل باحترافية' },
    { id: 5, nameAr: 'التواصل والرد على الرسائل في الوقت المناسب' },
    { id: 6, nameAr: 'التعاون والعمل ضمن الفريق' },
    { id: 7, nameAr: 'المبادرة وحل المشكلات' },
    { id: 8, nameAr: 'تقبل الفيدباك والتطور بناءً عليه' }
  ];

  // Mock Members Data
  const [members, setMembers] = useState([
    { id: 1, name: 'أحمد محمد', committee: 'pm', personalScores: {1:5, 2:5, 3:4, 4:5, 5:5, 6:4, 7:5, 8:4}, technicalScores: {1:9, 2:8, 3:9, 4:9, 5:8, 6:9}, swot: { strengths: 'قيادي ممتاز وبحثه قوي', weaknesses: 'أحياناً يتأخر في تسليم بعض المصادر', opportunities: 'فرصة ليكون هيد الموسم القادم', threats: 'ضغط الوقت والجامعة' }, sharedNotes: [{ sender: 'board', text: 'ممتاز يا شباب تابعوا معه' }] },
    { id: 2, name: 'سارة خالد', committee: 'pr', personalScores: {1:5, 2:5, 3:5, 4:5, 5:5, 6:5, 7:5, 8:5}, technicalScores: {1:10, 2:9, 3:10, 4:10, 5:9, 6:10}, swot: { strengths: 'علاقات قوية ولبقة جداً', weaknesses: 'تحتاج لتوثيق التقارير', opportunities: 'عقد شراكات كبرى', threats: 'لا توجد' }, sharedNotes: [{ sender: 'hr_leader', text: 'أداء مبهر هذا الشهر في الرعاة' }] }
  ]);

  const [selectedCommittee, setSelectedCommittee] = useState('pm');
  const [activeMemberId, setActiveMemberId] = useState(1);
  const [newNoteText, setNewNoteText] = useState('');

  // Calculate scores
  const calculatePersonalTotal = (scores) => {
    const sum = Object.values(scores).reduce((a, b) => a + b, 0);
    // Max 40
    return Math.round((sum / (8 * 5)) * 40);
  };

  const calculateTechnicalTotal = (scores) => {
    const sum = Object.values(scores).reduce((a, b) => a + b, 0);
    // Max 60
    return Math.round((sum / (6 * 10)) * 60);
  };

  const currentMember = members.find(m => m.id === activeMemberId) || members[0];
  const currentCommObj = committees.find(c => c.id === currentMember?.committee) || committees[0];

  const handlePersonalChange = (criterionId, val) => {
    const num = Math.max(0, Math.min(5, Number(val)));
    setMembers(members.map(m => m.id === activeMemberId ? {
      ...m,
      personalScores: { ...m.personalScores, [criterionId]: num }
    } : m));
  };

  const handleTechnicalChange = (criterionId, val) => {
    const num = Math.max(0, Math.min(10, Number(val)));
    setMembers(members.map(m => m.id === activeMemberId ? {
      ...m,
      technicalScores: { ...m.technicalScores, [criterionId]: num }
    } : m));
  };

  const handleSwotChange = (field, val) => {
    setMembers(members.map(m => m.id === activeMemberId ? {
      ...m,
      swot: { ...m.swot, [field]: val }
    } : m));
  };

  const addNote = () => {
    if (!newNoteText.trim()) return;
    const senderRole = currentUserRole === 'board' ? 'board' : 'hr_leader';
    setMembers(members.map(m => m.id === activeMemberId ? {
      ...m,
      sharedNotes: [...m.sharedNotes, { sender: senderRole, text: newNoteText }]
    } : m));
    setNewNoteText('');
  };

  return (
    <div dir="rtl" className="min-h-screen bg-slate-900 text-slate-100 font-sans p-4 md:p-6">
      {/* Top Header & Role Switcher */}
      <header className="bg-slate-800 border border-slate-700 rounded-2xl p-4 mb-6 flex flex-col md:flex-row justify-between items-center gap-4 shadow-xl">
        <div>
          <h1 className="text-2xl font-black text-amber-400 flex items-center gap-2">
            🛡️ Enactus Qena - نظام تقييم الأعضاء
          </h1>
          <p className="text-sm text-slate-400">مزامنة حية بين البورد وليدرز الـ HR مع تحليل SWOT والتقييمات</p>
        </div>
        
        <div className="flex items-center gap-3 bg-slate-900 p-2 rounded-xl border border-slate-700">
          <span className="text-xs text-slate-400">وضع الدخول الحالي:</span>
          <button 
            onClick={() => setCurrentUserRole(currentUserRole === 'board' ? 'hr_leader' : 'board')}
            className={`px-4 py-2 rounded-lg font-bold text-sm transition-all ${currentUserRole === 'board' ? 'bg-purple-600 text-white shadow-lg shadow-purple-900/50' : 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-900/50'}`}
          >
            {currentUserRole === 'board' ? '👑 البورد / الإدارة العليا' : '👤 ليدر الـ HR'}
          </button>
        </div>
      </header>

      {/* Main Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        
        {/* Sidebar: Committees & Members */}
        <div className="bg-slate-800 border border-slate-700 rounded-2xl p-4 space-y-4 shadow-lg">
          <h2 className="font-bold text-lg text-amber-300 border-b border-slate-700 pb-2">📂 اللجان والأعضاء</h2>
          
          <div className="space-y-2">
            <label className="text-xs text-slate-400">فلترة حسب اللجنة:</label>
            <select 
              value={selectedCommittee}
              onChange={(e) => setSelectedCommittee(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
            >
              {committees.map(c => (
                <option key={c.id} value={c.id}>{c.name}</option>
              ))}
            </select>
          </div>

          <div className="space-y-2 mt-4">
            <span className="text-xs text-slate-400">قائمة الأعضاء:</span>
            <div className="space-y-2 max-h-[400px] overflow-y-auto pr-1">
              {members.filter(m => currentUserRole === 'board' || m.committee === selectedCommittee).map(m => {
                const commName = committees.find(c => c.id === m.committee)?.name;
                const pScore = calculatePersonalTotal(m.personalScores);
                const tScore = calculateTechnicalTotal(m.technicalScores);
                const total = pScore + tScore;

                return (
                  <div 
                    key={m.id}
                    onClick={() => setActiveMemberId(m.id)}
                    className={`p-3 rounded-xl border cursor-pointer transition-all ${activeMemberId === m.id ? 'bg-amber-500/10 border-amber-500 text-white' : 'bg-slate-900/50 border-slate-700 text-slate-300 hover:bg-slate-900'}`}
                  >
                    <div className="flex justify-between items-center font-bold">
                      <span>{m.name}</span>
                      <span className="bg-amber-400 text-slate-950 px-2 py-0.5 rounded text-xs">{total} / 100</span>
                    </div>
                    <div className="text-xs text-slate-400 mt-1">{commName}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Evaluation Center */}
        <div className="lg:col-span-3 space-y-6">
          
          {/* Member Card Summary */}
          <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 shadow-lg flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <h2 className="text-2xl font-black text-white">{currentMember.name}</h2>
              <p className="text-sm text-amber-400 mt-1">{currentCommObj.name}</p>
            </div>
            <div className="flex gap-4">
              <div className="bg-slate-900 border border-slate-700 px-4 py-3 rounded-xl text-center">
                <span className="text-xs text-slate-400 block">التقييم الشخصي (40)</span>
                <span className="text-xl font-bold text-amber-400">{calculatePersonalTotal(currentMember.personalScores)}</span>
              </div>
              <div className="bg-slate-900 border border-slate-700 px-4 py-3 rounded-xl text-center">
                <span className="text-xs text-slate-400 block">التقييم الفني (60)</span>
                <span className="text-xl font-bold text-amber-400">{calculateTechnicalTotal(currentMember.technicalScores)}</span>
              </div>
              <div className="bg-amber-500 text-slate-950 px-5 py-3 rounded-xl text-center font-black flex flex-col justify-center">
                <span className="text-xs opacity-80 block">الدرجة النهائية</span>
                <span className="text-2xl">{calculatePersonalTotal(currentMember.personalScores) + calculateTechnicalTotal(currentMember.technicalScores)} / 100</span>
              </div>
            </div>
          </div>

          {/* Personal Evaluation (40 Marks) */}
          <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 shadow-lg">
            <h3 className="text-lg font-bold text-amber-300 mb-4 pb-2 border-b border-slate-700">
              📋 1. التقييم الشخصي (موحد لكل اللجان - من 40 درجة)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {personalCriteria.map(crit => (
                <div key={crit.id} className="bg-slate-900 p-3 rounded-xl border border-slate-700 flex justify-between items-center">
                  <span className="text-sm text-slate-300">{crit.nameAr}</span>
                  <div className="flex items-center gap-2">
                    <input 
                      type="number" 
                      min="0" 
                      max="5"
                      value={currentMember.personalScores[crit.id] || 0}
                      onChange={(e) => handlePersonalChange(crit.id, e.target.value)}
                      className="w-16 bg-slate-800 border border-slate-600 rounded-lg text-center p-1 text-white font-bold focus:outline-none focus:border-amber-400"
                    />
                    <span className="text-xs text-slate-500">/ 5</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Evaluation (60 Marks) */}
          <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 shadow-lg">
            <h3 className="text-lg font-bold text-amber-300 mb-4 pb-2 border-b border-slate-700">
              🛠️ 2. التقييم الفني التخصصي ({currentCommObj.name} - من 60 درجة)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentCommObj.criteria.map(crit => (
                <div key={crit.id} className="bg-slate-900 p-3 rounded-xl border border-slate-700 flex justify-between items-center">
                  <div>
                    <span className="text-sm text-slate-300 block">{crit.nameAr}</span>
                    <span className="text-xs text-slate-500">{crit.nameEn}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <input 
                      type="number" 
                      min="0" 
                      max="10"
                      value={currentMember.technicalScores[crit.id] || 0}
                      onChange={(e) => handleTechnicalChange(crit.id, e.target.value)}
                      className="w-16 bg-slate-800 border border-slate-600 rounded-lg text-center p-1 text-white font-bold focus:outline-none focus:border-amber-400"
                    />
                    <span className="text-xs text-slate-500">/ 10</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SWOT Analysis */}
          <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 shadow-lg">
            <h3 className="text-lg font-bold text-amber-300 mb-4 pb-2 border-b border-slate-700">
              📊 3. تحليل SWOT لكل عضو
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-slate-900 p-3 rounded-xl border border-slate-700">
                <label className="text-xs font-bold text-green-400 block mb-1">نقاط القوة (Strengths)</label>
                <textarea 
                  rows="2"
                  value={currentMember.swot.strengths}
                  onChange={(e) => handleSwotChange('strengths', e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-sm text-white focus:outline-none focus:border-green-400"
                ></textarea>
              </div>
              <div className="bg-slate-900 p-3 rounded-xl border border-slate-700">
                <label className="text-xs font-bold text-red-400 block mb-1">نقاط الضعف (Weaknesses)</label>
                <textarea 
                  rows="2"
                  value={currentMember.swot.weaknesses}
                  onChange={(e) => handleSwotChange('weaknesses', e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-sm text-white focus:outline-none focus:border-red-400"
                ></textarea>
              </div>
              <div className="bg-slate-900 p-3 rounded-xl border border-slate-700">
                <label className="text-xs font-bold text-blue-400 block mb-1">الفرص (Opportunities)</label>
                <textarea 
                  rows="2"
                  value={currentMember.swot.opportunities}
                  onChange={(e) => handleSwotChange('opportunities', e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-sm text-white focus:outline-none focus:border-blue-400"
                ></textarea>
              </div>
              <div className="bg-slate-900 p-3 rounded-xl border border-slate-700">
                <label className="text-xs font-bold text-amber-400 block mb-1">التهديدات (Threats)</label>
                <textarea 
                  rows="2"
                  value={currentMember.swot.threats}
                  onChange={(e) => handleSwotChange('threats', e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-sm text-white focus:outline-none focus:border-amber-400"
                ></textarea>
              </div>
            </div>
          </div>

          {/* Real-time Shared Comments Feed */}
          <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 shadow-lg">
            <h3 className="text-lg font-bold text-amber-300 mb-4 pb-2 border-b border-slate-700">
              💬 الملاحظات المشتركة الحية (بين البورد وليدر الـ HR)
            </h3>
            
            <div className="space-y-3 mb-4 max-h-[250px] overflow-y-auto">
              {currentMember.sharedNotes.map((note, idx) => (
                <div key={idx} className={`p-3 rounded-xl text-sm ${note.sender === 'board' ? 'bg-purple-950/40 border border-purple-800 text-purple-200 ml-8' : 'bg-amber-950/40 border border-amber-800 text-amber-200 mr-8'}`}>
                  <div className="text-xs font-bold opacity-70 mb-1">
                    {note.sender === 'board' ? '👑 ملاحظة من البورد' : '👤 ملاحظة من ليدر الـ HR'}
                  </div>
                  <div>{note.text}</div>
                </div>
              ))}
            </div>

            <div className="flex gap-2">
              <input 
                type="text"
                placeholder="اكتب ملاحظة أو توجيه جديد يظهر للطرف الآخر فوراً..."
                value={newNoteText}
                onChange={(e) => setNewNoteText(e.target.value)}
                className="flex-1 bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
              />
              <button 
                onClick={addNote}
                className="bg-amber-500 hover:bg-amber-400 text-slate-950 px-6 py-2.5 rounded-xl font-bold transition-all"
              >
                إرسال
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
