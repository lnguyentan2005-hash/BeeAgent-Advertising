import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { 
  TrendingDown, Target, Filter, BarChart3, CheckCircle2, 
  ArrowRight, MessageCircle, AlertTriangle, Zap, DollarSign, 
  PieChart, ChevronRight, Activity, Users, MousePointerClick,
  BadgeDollarSign, LineChart
} from 'lucide-react';

export default function App() {
  const scrollToForm = () => {
    const formElement = document.getElementById('lead-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-amber-500/30">
      <Navbar onCtaClick={scrollToForm} />
      <main>
        <HeroSection />
        <TrustBar />
        <AdScoreChecker onCtaClick={scrollToForm} />
        <WasteCalculator onCtaClick={scrollToForm} />
        <FunnelAnalysis />
        <ProblemsSection />
        <SolutionsSection />
        <CaseStudySection />
        <TestimonialsSection />
        <FinalCTA onCtaClick={scrollToForm} />
      </main>
      <Footer />
    </div>
  );
}

function Logo() {
  return (
    <div className="flex items-center gap-3">
      {/* Text */}
      <div className="flex flex-col justify-center">
        <div className="text-2xl sm:text-3xl font-black tracking-tight leading-none flex items-baseline">
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-amber-300 to-amber-500">Bee</span>
          <span className="text-white">Agent</span>
        </div>
        <div className="text-[9px] sm:text-[11px] font-bold tracking-[0.35em] text-gray-300 uppercase leading-none mt-1.5 ml-0.5">
          Advertising
        </div>
      </div>
    </div>
  );
}

function Navbar({ onCtaClick }: { onCtaClick: () => void }) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Logo />
        <button 
          onClick={onCtaClick}
          className="hidden sm:flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 transition-all font-medium text-sm"
        >
          Nhận Tư Vấn Miễn Phí
        </button>
      </div>
    </nav>
  );
}

function HeroSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    problem: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const webhookUrl = 'https://hook.eu1.make.com/vjfsrp4ih8hklckmiq6a5lxew28kk3d8';
      
      await fetch(webhookUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-amber-500 blur-[100px] rounded-full mix-blend-screen" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 font-medium text-sm mb-6">
              <AlertTriangle className="w-4 h-4" />
              <span>Dành cho doanh nghiệp đang chạy Ads</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
              Ngừng lãng phí ngân sách vào những quảng cáo <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">không chuyển đổi</span>
            </h1>
            
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              BeeAgent Advertising giúp các doanh nghiệp tối ưu hóa Google Ads và Facebook Ads bằng chiến lược dựa trên dữ liệu và các chiến dịch tập trung vào chuyển đổi.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                'Giảm ngay 30% chi phí quảng cáo lãng phí',
                'Tối ưu hóa phễu chuyển đổi từ Click đến Sale',
                'Nhắm đúng tệp khách hàng có nhu cầu mua cao'
              ].map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="mt-1 bg-emerald-500/20 rounded-full p-1">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  </div>
                  <span className="text-slate-300">{benefit}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            id="lead-form"
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-purple-600/20 blur-2xl rounded-3xl" />
            
            <div className="relative bg-slate-900/80 backdrop-blur-xl border border-slate-800 p-8 rounded-3xl shadow-2xl">
              {!isSubmitted ? (
                <>
                  <h3 className="text-2xl font-bold mb-2">Nhận Kiểm Toán Quảng Cáo Miễn Phí</h3>
                  <p className="text-slate-400 text-sm mb-6">Điền thông tin để chuyên gia của chúng tôi phân tích chiến dịch của bạn.</p>
                  
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-1">Họ và tên *</label>
                      <input 
                        required
                        type="text" 
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all"
                        placeholder="Nhập họ tên của bạn"
                        value={formData.name}
                        onChange={e => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-1">Số điện thoại *</label>
                      <input 
                        required
                        type="tel" 
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all"
                        placeholder="09xx xxx xxx"
                        value={formData.phone}
                        onChange={e => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-1">Email thường dùng *</label>
                      <input 
                        required
                        type="email" 
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all"
                        placeholder="email@congty.com"
                        value={formData.email}
                        onChange={e => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-1">Vấn đề quảng cáo đang gặp phải</label>
                      <textarea 
                        rows={3}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all resize-none"
                        placeholder="Ví dụ: Chạy tốn tiền nhưng không có khách..."
                        value={formData.problem}
                        onChange={e => setFormData({...formData, problem: e.target.value})}
                      />
                    </div>
                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white font-bold py-4 rounded-xl shadow-lg shadow-orange-500/25 transition-all flex items-center justify-center gap-2 disabled:opacity-70"
                    >
                      {isSubmitting ? 'Đang gửi...' : 'Nhận Tư Vấn Ngay'}
                      {!isSubmitting && <ArrowRight className="w-5 h-5" />}
                    </button>
                  </form>
                </>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 text-emerald-400" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Cảm ơn bạn đã đặt lịch!</h3>
                  <p className="text-slate-400 mb-8 leading-relaxed">
                    Đội ngũ BeeAgent Advertising đã nhận được thông tin và sẽ sớm liên lạc với bạn để tư vấn giải pháp tối ưu nhất.
                  </p>
                  <a 
                    href="https://www.facebook.com/messages/t/1062139860317589"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full bg-[#0084FF] hover:bg-[#0073e6] text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-blue-500/25"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Liên hệ ngay qua Messenger
                  </a>
                </motion.div>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  return (
    <section className="border-y border-slate-800/50 bg-slate-900/30 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-slate-400 mb-6 uppercase tracking-wider">
          Giúp doanh nghiệp giảm chi phí quảng cáo lãng phí và tăng ROI tiếp thị
        </p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="flex items-center gap-2">
            <Target className="w-6 h-6 text-blue-400" />
            <span className="font-semibold text-slate-300">Google Ads</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-6 h-6 text-blue-600" />
            <span className="font-semibold text-slate-300">Facebook Ads</span>
          </div>
          <div className="flex items-center gap-2">
            <Filter className="w-6 h-6 text-amber-500" />
            <span className="font-semibold text-slate-300">Phân Tích Phễu</span>
          </div>
          <div className="flex items-center gap-2">
            <LineChart className="w-6 h-6 text-emerald-500" />
            <span className="font-semibold text-slate-300">Data-Driven</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function AdScoreChecker({ onCtaClick }: { onCtaClick: () => void }) {
  const [isChecking, setIsChecking] = useState(false);
  const [score, setScore] = useState<number | null>(null);

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault();
    setIsChecking(true);
    setScore(null);
    
    setTimeout(() => {
      setIsChecking(false);
      setScore(Math.floor(Math.random() * (75 - 45 + 1) + 45));
    }, 1500);
  };

  return (
    <section className="py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Kiểm tra điểm hiệu suất quảng cáo</h2>
          <p className="text-slate-400">Công cụ phân tích nhanh giúp bạn biết chiến dịch của mình đang ở mức nào.</p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-10 shadow-2xl">
          {!score && !isChecking && (
            <form onSubmit={handleCheck} className="grid md:grid-cols-3 gap-4 items-end">
              <div className="space-y-2">
                <label className="text-sm text-slate-400">URL Trang web</label>
                <input required type="url" placeholder="https://..." className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-amber-500/50 outline-none" />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-slate-400">Ngân sách / tháng</label>
                <select className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-amber-500/50 outline-none">
                  <option>&lt; 20 Triệu</option>
                  <option>20 - 50 Triệu</option>
                  <option>50 - 100 Triệu</option>
                  <option>&gt; 100 Triệu</option>
                </select>
              </div>
              <button type="submit" className="w-full bg-white text-slate-950 hover:bg-slate-200 font-bold py-3 rounded-xl transition-colors">
                Kiểm Tra Ngay
              </button>
            </form>
          )}

          {isChecking && (
            <div className="py-12 flex flex-col items-center justify-center space-y-4">
              <div className="w-12 h-12 border-4 border-amber-500/30 border-t-amber-500 rounded-full animate-spin" />
              <p className="text-slate-400 animate-pulse">Đang phân tích dữ liệu...</p>
            </div>
          )}

          {score && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-32 h-32 rounded-full border-8 border-orange-500/20 mb-6 relative">
                <span className="text-4xl font-bold text-orange-500">{score}</span>
                <span className="absolute bottom-4 text-xs text-slate-400">/ 100</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Hiệu suất ở mức Cảnh Báo</h3>
              <p className="text-slate-300 mb-8 max-w-2xl mx-auto bg-red-500/10 border border-red-500/20 p-4 rounded-xl text-red-200">
                Chiến dịch của bạn có thể đang mất tới <strong>30% - 45% lượt chuyển đổi tiềm năng</strong> do nhắm mục tiêu kém và các vấn đề về trang đích.
              </p>
              <button onClick={onCtaClick} className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-orange-500/25 transition-all">
                Nhận Báo Cáo Kiểm Toán Đầy Đủ
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}

function WasteCalculator({ onCtaClick }: { onCtaClick: () => void }) {
  const [budget, setBudget] = useState<number>(50000000);
  const [cpc, setCpc] = useState<number>(5000);
  const [cr, setCr] = useState<number>(1.5);

  const targetCr = 4.0;
  const wastePercentage = Math.max(0, (targetCr - cr) / targetCr);
  const wastedSpend = budget * wastePercentage;

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND', maximumFractionDigits: 0 }).format(val);
  };

  return (
    <section className="py-24 bg-slate-900/50 border-y border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Công Cụ Tính Toán Lãng Phí Quảng Cáo</h2>
            <p className="text-slate-400 mb-8 text-lg">
              Nhiều doanh nghiệp mất một phần đáng kể ngân sách quảng cáo do cấu trúc chiến dịch kém hoặc trang đích yếu. Hãy xem bạn đang lãng phí bao nhiêu mỗi tháng.
            </p>

            <div className="space-y-8 bg-slate-950 p-8 rounded-3xl border border-slate-800">
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium text-slate-300">Ngân sách hàng tháng</label>
                  <span className="text-amber-400 font-bold">{formatCurrency(budget)}</span>
                </div>
                <input 
                  type="range" min="10000000" max="500000000" step="5000000"
                  value={budget} onChange={(e) => setBudget(Number(e.target.value))}
                  className="w-full accent-amber-500"
                />
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium text-slate-300">CPC Trung bình</label>
                  <span className="text-amber-400 font-bold">{formatCurrency(cpc)}</span>
                </div>
                <input 
                  type="range" min="1000" max="50000" step="500"
                  value={cpc} onChange={(e) => setCpc(Number(e.target.value))}
                  className="w-full accent-amber-500"
                />
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium text-slate-300">Tỷ lệ chuyển đổi (CR) %</label>
                  <span className="text-amber-400 font-bold">{cr}%</span>
                </div>
                <input 
                  type="range" min="0.1" max="10" step="0.1"
                  value={cr} onChange={(e) => setCr(Number(e.target.value))}
                  className="w-full accent-amber-500"
                />
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 p-10 rounded-3xl shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/10 blur-[80px] rounded-full pointer-events-none" />
            
            <h3 className="text-xl font-medium text-slate-400 mb-2">Chi phí quảng cáo lãng phí ước tính</h3>
            <div className="text-5xl md:text-6xl font-bold text-red-500 mb-6 tracking-tight">
              {formatCurrency(wastedSpend)}<span className="text-2xl text-slate-500 font-normal">/tháng</span>
            </div>
            
            <div className="bg-slate-800/50 p-6 rounded-2xl mb-8 border border-slate-700/50">
              <p className="text-slate-300 leading-relaxed">
                Với tỷ lệ chuyển đổi <strong className="text-white">{cr}%</strong>, phần lớn lượt nhấp chuột bạn trả tiền đang thoát ra mà không để lại thông tin. Tối ưu hóa phễu có thể thu hồi số tiền này.
              </p>
            </div>

            <button onClick={onCtaClick} className="w-full bg-white text-slate-950 hover:bg-slate-200 font-bold py-4 rounded-xl transition-colors flex items-center justify-center gap-2">
              Ngừng Lãng Phí Ngay Hôm Nay
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

function FunnelAnalysis() {
  const steps = [
    { name: 'Lưu lượng truy cập', icon: Users, leak: 'Nhắm mục tiêu sai' },
    { name: 'Nhấp chuột', icon: MousePointerClick, leak: 'Tỷ lệ CTR thấp' },
    { name: 'Trang đích', icon: Filter, leak: 'Trang đích yếu' },
    { name: 'Khách hàng tiềm năng', icon: Target, leak: 'Ưu đãi kém' },
    { name: 'Khách hàng', icon: BadgeDollarSign, leak: 'Chăm sóc kém' },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Phân Tích Trực Quan Phễu Quảng Cáo</h2>
          <p className="text-slate-400 text-lg">
            Khách hàng không tự nhiên biến mất. Họ rơi rụng qua các "lỗ hổng" trong phễu chuyển đổi của bạn. BeeAgent xác định và vá các lỗ hổng này.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-slate-800 via-amber-500/50 to-emerald-500/50 -translate-y-1/2 z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative z-10">
            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center relative group">
                <div className="absolute -top-12 opacity-0 group-hover:opacity-100 transition-opacity bg-red-500/10 border border-red-500/20 text-red-400 text-xs py-1 px-3 rounded-full whitespace-nowrap">
                  Rò rỉ: {step.leak}
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-red-500/20 rotate-45 border-r border-b border-red-500/20" />
                </div>

                <div className="w-20 h-20 rounded-2xl bg-slate-900 border border-slate-700 flex items-center justify-center mb-4 shadow-xl group-hover:border-amber-500/50 group-hover:shadow-amber-500/20 transition-all relative">
                  <step.icon className="w-8 h-8 text-slate-300 group-hover:text-amber-400 transition-colors" />
                  {idx < steps.length - 1 && (
                    <ChevronRight className="md:hidden absolute -bottom-6 text-slate-600 w-5 h-5" />
                  )}
                </div>
                <h4 className="font-semibold text-slate-200 text-center">{step.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProblemsSection() {
  const problems = [
    { title: 'Chạy quảng cáo nhưng không có doanh số', icon: TrendingDown },
    { title: 'Chi phí CPC tăng cao liên tục', icon: DollarSign },
    { title: 'Tỷ lệ chuyển đổi (CR) quá thấp', icon: Activity },
    { title: 'Nhắm mục tiêu đối tượng kém hiệu quả', icon: Target },
    { title: 'Không có phễu marketing rõ ràng', icon: Filter },
  ];

  return (
    <section className="py-24 bg-slate-900/30 border-y border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Bạn có đang gặp phải những vấn đề này?</h2>
            <p className="text-slate-400 text-lg mb-8">
              Đổ tiền vào quảng cáo mà không có chiến lược rõ ràng giống như ném tiền qua cửa sổ. Nếu bạn thấy quen thuộc với các dấu hiệu này, chiến dịch của bạn đang cần được cấp cứu.
            </p>
          </div>
          
          <div className="grid gap-4">
            {problems.map((prob, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center gap-4 bg-slate-900 border border-slate-800 p-5 rounded-2xl"
              >
                <div className="bg-red-500/10 p-3 rounded-xl">
                  <prob.icon className="w-6 h-6 text-red-400" />
                </div>
                <h4 className="font-medium text-slate-200 text-lg">{prob.title}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SolutionsSection() {
  const solutions = [
    { title: 'Kiểm toán chiến dịch', desc: 'Tìm ra chính xác nơi tiền của bạn đang bị lãng phí.' },
    { title: 'Phân tích phễu chuyển đổi', desc: 'Xây dựng hành trình khách hàng liền mạch từ Click đến Mua.' },
    { title: 'Tối ưu hóa nhắm mục tiêu', desc: 'Loại bỏ tệp rác, tập trung vào khách hàng có khả năng chi trả.' },
    { title: 'Tối ưu hóa nội dung', desc: 'Viết lại Ad Copy đánh trúng tâm lý khách hàng mục tiêu.' },
    { title: 'Cải thiện Landing Page', desc: 'Thiết kế lại trang đích tập trung 100% vào tỷ lệ chuyển đổi.' },
    { title: 'Tối ưu hóa chi phí', desc: 'Giảm CPC, tăng điểm chất lượng và tối đa hóa ROI.' },
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Giải Pháp Từ BeeAgent Advertising</h2>
          <p className="text-slate-400 text-lg">
            Chúng tôi không chỉ chạy quảng cáo. Chúng tôi tái cấu trúc toàn bộ hệ thống thu hút khách hàng của bạn để đảm bảo mọi đồng chi ra đều mang lại lợi nhuận.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((sol, idx) => (
            <div key={idx} className="bg-slate-900 border border-slate-800 p-8 rounded-3xl hover:border-amber-500/30 transition-colors group">
              <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <CheckCircle2 className="w-6 h-6 text-amber-500" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-200">{sol.title}</h3>
              <p className="text-slate-400 leading-relaxed">{sol.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseStudySection() {
  return (
    <section className="py-24 bg-slate-900/50 border-y border-slate-800/50 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none -translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-medium text-sm mb-6">
              <BarChart3 className="w-4 h-4" />
              <span>Nghiên Cứu Trường Hợp Thực Tế</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Biến chiến dịch lỗ thành cỗ máy in tiền</h2>
            <p className="text-slate-400 text-lg mb-8">
              Một khách hàng trong ngành <strong>Bất động sản</strong> đã tìm đến chúng tôi khi chi phí quảng cáo đang ăn mòn toàn bộ lợi nhuận. Đây là kết quả sau 30 ngày tối ưu.
            </p>
          </div>

          <div className="bg-slate-950 border border-slate-800 p-8 rounded-3xl shadow-2xl">
            <div className="grid grid-cols-2 gap-8 relative">
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-800 -translate-x-1/2">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-900 border border-slate-700 text-xs font-bold px-2 py-1 rounded-full text-slate-400">
                  VS
                </div>
              </div>

              <div className="space-y-6">
                <h4 className="text-slate-500 font-medium uppercase tracking-wider text-sm">Trước khi tối ưu</h4>
                <div>
                  <div className="text-sm text-slate-400 mb-1">CPC Trung bình</div>
                  <div className="text-3xl font-bold text-red-400">$2.80</div>
                </div>
                <div>
                  <div className="text-sm text-slate-400 mb-1">Tỷ lệ chuyển đổi</div>
                  <div className="text-3xl font-bold text-red-400">1.9%</div>
                </div>
              </div>

              <div className="space-y-6 pl-4">
                <h4 className="text-emerald-500 font-medium uppercase tracking-wider text-sm">Sau 30 ngày</h4>
                <div>
                  <div className="text-sm text-slate-400 mb-1">CPC Trung bình</div>
                  <div className="text-3xl font-bold text-emerald-400">$1.60</div>
                  <div className="text-xs text-emerald-500/80 mt-1">Giảm 42%</div>
                </div>
                <div>
                  <div className="text-sm text-slate-400 mb-1">Tỷ lệ chuyển đổi</div>
                  <div className="text-3xl font-bold text-emerald-400">4.7%</div>
                  <div className="text-xs text-emerald-500/80 mt-1">Tăng 147%</div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-slate-800">
              <p className="text-center font-medium text-slate-300">
                Doanh thu từ quảng cáo tăng <span className="text-emerald-400 font-bold">3.2x lần</span> với cùng một mức ngân sách.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Chúng tôi đã đốt gần 100 triệu mỗi tháng cho Facebook Ads mà không thấy hiệu quả. BeeAgent đã vào cuộc, cấu trúc lại toàn bộ phễu và giúp chúng tôi x2 doanh thu chỉ sau 2 tháng.",
      author: "Nguyễn Văn A",
      role: "CEO, Chuỗi Bán Lẻ Nội Thất"
    },
    {
      quote: "Điều tôi thích nhất ở BeeAgent là họ tập trung vào lợi nhuận cuối cùng (ROI) chứ không chỉ là những chỉ số ảo như lượt click hay hiển thị. Rất đáng tiền!",
      author: "Trần Thị B",
      role: "Founder, Thẩm Mỹ Viện"
    }
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Khách Hàng Nói Gì Về Chúng Tôi</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((test, idx) => (
            <div key={idx} className="bg-slate-900 border border-slate-800 p-8 rounded-3xl relative">
              <div className="text-amber-500/20 text-6xl font-serif absolute top-4 left-6">"</div>
              <p className="text-slate-300 text-lg leading-relaxed mb-8 relative z-10 pt-4">
                {test.quote}
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-slate-700 to-slate-800 rounded-full flex items-center justify-center font-bold text-xl">
                  {test.author[0]}
                </div>
                <div>
                  <div className="font-bold text-slate-200">{test.author}</div>
                  <div className="text-sm text-slate-500">{test.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA({ onCtaClick }: { onCtaClick: () => void }) {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-600/20 to-purple-900/40" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
          Tìm hiểu lý do tại sao quảng cáo của bạn không chuyển đổi
        </h2>
        <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
          Đừng để ngân sách tiếp tục bốc hơi. Đăng ký ngay để nhận báo cáo kiểm toán toàn diện từ chuyên gia của BeeAgent.
        </p>
        <button 
          onClick={onCtaClick}
          className="bg-white text-slate-950 hover:bg-slate-200 font-bold px-10 py-5 rounded-2xl text-lg shadow-2xl shadow-white/10 transition-all transform hover:scale-105"
        >
          Yêu Cầu Kiểm Tra Quảng Cáo Miễn Phí
        </button>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <Logo />
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} BeeAgent Advertising. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
