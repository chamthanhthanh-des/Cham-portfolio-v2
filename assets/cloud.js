/* ════════════════════════════════════════════════════════════
   SUPABASE CLOUD SYNC  —  Châm Portfolio
   ────────────────────────────────────────────────────────────
   ⚠️  ĐIỀN 2 GIÁ TRỊ DƯỚI ĐÂY:
   Supabase Dashboard → project của bạn → Settings → API
     • Project URL        → dán vào SB_URL
     • anon  public  key  → dán vào SB_ANON_KEY  (key này công khai,
                            an toàn vì bảng site_data đã bật RLS)
   Sau khi điền xong: admin sẽ tự lưu lên cloud, web khách thấy ngay.
   ════════════════════════════════════════════════════════════ */
const SB_URL = "https://lqnhafqbqnniyzglsofu.supabase.co";
const SB_ANON_KEY = "sb_publishable_AtWYRDc3MM6Zs4_yaLOYxQ_waumWHSA";

/* ── map: key trên cloud → biến toàn cục + key localStorage ── */
const _CLOUD_MAP = [
  ["works", "ctw_w4", (v) => (works = v)],
  ["posts", "ctw_q1", (v) => (posts = v)],
  ["career", "ctw_c4", (v) => (career = v)],
  ["hero", "ctw_h4", (v) => (hero = v)],
  ["about", "ctw_ab1", (v) => (about = v)],
  ["contact", "ctw_ct1", (v) => (contact = v)],
];

/* ── coi là "rỗng" nếu mảng [] hoặc object {} → giữ data mặc định ── */
function _cloudEmpty(v) {
  if (v == null) return true;
  if (Array.isArray(v)) return v.length === 0;
  if (typeof v === "object") return Object.keys(v).length === 0;
  return false;
}

window._dataReady = (async function initCloud() {
  // Chưa cấu hình → bỏ qua, web chạy bằng data mặc định / localStorage
  if (SB_URL.includes("YOUR_PROJECT") || SB_ANON_KEY.includes("YOUR_ANON")) {
    return false;
  }

  // Nạp thư viện supabase-js (1 lần)
  if (!window.supabase) {
    try {
      await new Promise((resolve, reject) => {
        const s = document.createElement("script");
        s.src = "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2";
        s.onload = resolve;
        s.onerror = reject;
        document.head.appendChild(s);
      });
    } catch (e) {
      console.warn("[cloud] không nạp được supabase-js", e);
      return false;
    }
  }

  // Tạo client dùng chung cho cả admin
  window._sb = window.supabase.createClient(SB_URL, SB_ANON_KEY);

  // Đọc toàn bộ dữ liệu site
  try {
    const { data, error } = await window._sb
      .from("site_data")
      .select("key,value");
    if (error || !data) {
      console.warn("[cloud] đọc site_data lỗi", error);
      return false;
    }

    const byKey = {};
    data.forEach((row) => (byKey[row.key] = row.value));

    let applied = false;
    _CLOUD_MAP.forEach(([key, lsKey, setter]) => {
      const v = byKey[key];
      if (_cloudEmpty(v)) return; // cloud rỗng → giữ default
      setter(v);
      try {
        localStorage.setItem(lsKey, JSON.stringify(v));
      } catch (_) {}
      applied = true;
    });

    return applied; // true → các trang sẽ re-render bằng data cloud
  } catch (e) {
    console.warn("[cloud] load thất bại", e);
    return false;
  }
})();
