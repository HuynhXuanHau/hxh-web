import React from 'react';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-100">
      
      {/* 1. HERO SECTION */}
      <header className="bg-white border-b border-slate-200 py-16 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 text-center md:text-left">
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold mb-4 uppercase tracking-wider">
              AI Engineering Student
            </span>
            <h1 className="text-5xl font-extrabold mb-4 text-slate-900 tracking-tight">
              Huỳnh Xuân Hậu
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-2xl">
              Sinh viên năm 3 tại VKU, chuyên sâu nghiên cứu Deep Learning và Backend. 
              Đang tham gia <span className="text-blue-600 font-semibold">XBrain (TechX) – AWS Internship 2026</span>.
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              <a href="mailto:hauhx@vku.udn.vn" className="bg-blue-600 text-white px-6 py-2.5 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 active:scale-95">
                📧 Liên hệ
              </a>
              <a href="https://github.com/hxhau" target="_blank" className="bg-white border border-slate-300 px-6 py-2.5 rounded-xl font-bold hover:bg-slate-50 transition-all active:scale-95">
                💻 GitHub
              </a>
            </div>
          </div>
          <div className="w-48 h-48 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[2rem] rotate-3 shadow-2xl flex items-center justify-center text-white text-6xl font-black">
            HXH
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto py-16 px-6">
        
        {/* 2. RESEARCH & EDUCATION */}
        <div className="grid md:grid-cols-3 gap-12 mb-20">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
              📖 Nghiên cứu Khoa học
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-lg text-slate-800 italic">Phishing URL Detection using Transformers</h3>
                  <span className="text-[10px] font-black text-green-700 bg-green-100 px-2 py-1 rounded-md uppercase">Published</span>
                </div>
                <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                  Nghiên cứu ứng dụng BERT-Tiny và DistilBERT để phát hiện các liên kết lừa đảo. 
                  Tối ưu hóa khả năng nhận diện với độ chính xác cao trên tập dữ liệu thực tế.
                </p>
                <div className="flex gap-2">
                  <span className="text-[10px] bg-slate-100 px-2 py-1 rounded font-bold text-slate-500 uppercase">NLP</span>
                  <span className="text-[10px] bg-slate-100 px-2 py-1 rounded font-bold text-slate-500 uppercase">Deep Learning</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50/50 p-8 rounded-3xl border border-blue-100">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              🎓 Học vấn
            </h2>
            <div className="space-y-6">
              <div>
                <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-1">2022 - 2026</p>
                <h4 className="font-bold text-slate-800">Đại học VKU</h4>
                <p className="text-sm text-slate-600">Ngành: Kỹ thuật AI</p>
                <p className="text-xs text-slate-400 mt-2 italic">Thành viên lớp khóa 2022, đang học kỳ 6.</p>
              </div>
            </div>
          </div>
        </div>

        {/* 3. CORE PROJECTS */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
            🛠️ Dự án tiêu biểu
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-[2rem] border border-slate-200 hover:border-blue-400 transition-all group">
              <div className="text-3xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600">Malware Detection System</h3>
              <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                Hệ thống phát hiện mã độc trong file đính kèm dựa trên Static Feature Analysis và Deep Learning (CNN/MLP). 
                Dự kiến hoàn thành: 04/2026.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Python', 'CNN', 'Security'].map(t => (
                  <span key={t} className="text-[10px] font-bold px-2 py-1 bg-slate-100 text-slate-500 rounded-md uppercase">{t}</span>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-[2rem] border border-slate-200 hover:border-blue-400 transition-all group">
              <div className="text-3xl mb-4">☁️</div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600">AWS Static Website CI/CD</h3>
              <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                Triển khai hạ tầng Cloud cho Portfolio tự động hóa qua GitHub Actions, S3, CloudFront và Route 53.
              </p>
              <div className="flex flex-wrap gap-2">
                {['AWS', 'DevOps', 'CI/CD'].map(t => (
                  <span key={t} className="text-[10px] font-bold px-2 py-1 bg-slate-100 text-slate-500 rounded-md uppercase">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 4. SKILLS BOX */}
        <section className="bg-slate-900 rounded-[2.5rem] p-10 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 blur-[100px] rounded-full"></div>
          <h2 className="text-2xl font-bold mb-10">Kỹ năng chuyên môn</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
            <div>
              <p className="text-blue-400 font-bold mb-4 uppercase text-xs tracking-widest">AI & Research</p>
              <ul className="text-sm space-y-2 text-slate-300">
                <li>• RNN / CNN / MLP</li>
                <li>• Transformers Model</li>
                <li>• TensorFlow / PyTorch</li>
              </ul>
            </div>
            <div>
              <p className="text-blue-400 font-bold mb-4 uppercase text-xs tracking-widest">Cloud & Backend</p>
              <ul className="text-sm space-y-2 text-slate-300">
                <li>• AWS (S3, EC2, IAM)</li>
                <li>• Java / Spring Boot</li>
                <li>• GitHub Actions</li>
              </ul>
            </div>
            <div>
              <p className="text-blue-400 font-bold mb-4 uppercase text-xs tracking-widest">Engineering Tools</p>
              <ul className="text-sm space-y-2 text-slate-300">
                <li>• Linux CLI / Git</li>
                <li>• MySQL / Redis</li>
                <li>• Static Analysis</li>
              </ul>
            </div>
          </div>
        </section>

      </main>

      <footer className="py-12 border-t border-slate-200 text-center text-slate-400 text-sm">
        <p>© 2026 Huỳnh Xuân Hậu. Được lưu trữ an toàn trên AWS Cloud.</p>
        <p className="mt-2 text-[10px] uppercase tracking-widest opacity-50">Vietnam–Korea University (VKU)</p>
      </footer>
    </div>
  );
};

export default Portfolio;