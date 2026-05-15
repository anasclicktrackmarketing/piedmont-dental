"""Append manual description rewrites to DESCRIPTION-REWRITES.md."""
import sys

sys.stdout.reconfigure(encoding="utf-8")

manual_rewrites = [
    ("app/about/dr-cangini/page.tsx",
     "Dr. Filippo Cangini is a board-certified periodontist with 25 years of experience. University of Siena, University of Buffalo, and University of Rochester (Eastman Dental Center) trained.",
     "Dr. Filippo Cangini — board-certified periodontist, 25 years' experience. Trained at U. of Siena, Buffalo, and Rochester's Eastman Dental Center."),
    ("app/about/dr-ma/page.tsx",
     "Dr. David Ma graduated with honors from the University of Pennsylvania School of Dental Medicine. UC Davis-trained in Neurobiology, with extensive experience in full mouth rehabilitations and complex treatment planning.",
     "Dr. David Ma — UPenn Dental Medicine graduate with honors and UC Davis training in neurobiology. Expert in full-mouth rehabilitations and complex planning."),
    ("app/about/dr-martenson/page.tsx",
     "Meet Dr. Jill A. Martenson, DDS — owner of Piedmont Dental By Design and Best Esthetic Dentist 2024. UCLA & UOP-trained with 29 years of experience in cosmetic and restorative dentistry.",
     "Dr. Jill A. Martenson, DDS — owner and Best Esthetic Dentist 2024. UCLA & UOP-trained, 29 years of cosmetic and restorative dentistry experience."),
    ("app/about/page.tsx",
     "Meet Dr. Jill Martenson, DDS — owner and lead dentist of Piedmont Dental By Design. 29 years of cosmetic and restorative dentistry on Grand Avenue. Voted Best Esthetic Dentist 2024 by Best of the East Bay.",
     "Meet Dr. Jill Martenson, DDS — owner & lead dentist. 29 years of cosmetic and restorative dentistry on Grand Avenue. Best Esthetic Dentist 2024."),
    ("app/about/team/page.tsx",
     "The full Piedmont Dental By Design team — three dentists and nine practice staff including hygienists, assistants, and patient services. Real people who keep the practice running.",
     "Meet the full team — three dentists plus nine practice staff: hygienists, assistants, and patient services. Real people who keep the practice running."),
    ("app/about/tour/page.tsx",
     "Take a guided tour of Piedmont Dental By Design — 10 views inside the practice at 1331 Grand Ave, Piedmont, CA. Modern operatories, digital imaging, and a comfortable patient experience.",
     "Take a guided tour — 10 views inside our practice at 1331 Grand Ave, Piedmont. Modern operatories, digital imaging, and a comfortable patient experience."),
    ("app/faqs/page.tsx",
     "Common dental health questions answered. Bad breath, brushing & flossing, gum disease, amalgam fillings, cosmetic dentistry, veneers, and teeth whitening — by Dr. Jill Martenson.",
     "Common dental questions answered: bad breath, brushing, flossing, gum disease, fillings, cosmetic dentistry, veneers, and whitening — by Dr. Martenson."),
    ("app/patient-reviews/page.tsx",
     "Read what real patients say about Piedmont Dental By Design — 4.9 stars across 344+ Google reviews, plus first-hand testimonials from patients of Dr. Jill Martenson and team.",
     "Read what real patients say — 4.9 stars across 344+ Google reviews, plus first-hand testimonials from patients of Dr. Jill Martenson and team."),
    ("app/procedures/cleanings-prevention/dental-exams-cleanings/page.tsx",
     "Comprehensive dental exams and professional cleanings — oral cancer screening, gum disease evaluation, decay detection, and tartar removal by registered hygienists.",
     "Comprehensive dental exams & professional cleanings — oral cancer screening, gum disease evaluation, decay detection, tartar removal by registered hygienists."),
    ("app/procedures/cosmetic-dentistry/page.tsx",
     "Cosmetic dentistry — porcelain veneers, professional teeth whitening, CEREC same-day crowns, Invisalign clear aligners, and surgical crown lengthening. Personalized care from Dr. Jill Martenson.",
     "Cosmetic dentistry — porcelain veneers, professional whitening, CEREC same-day crowns, Invisalign, and crown lengthening. Personalized care from Dr. Martenson."),
    ("app/procedures/cosmetic-dentistry/surgery/page.tsx",
     "Surgical crown lengthening reshapes the gumline to expose more tooth — ideal for short teeth or 'gummy' smiles. Often paired with porcelain veneers for proportion.",
     "Surgical crown lengthening reshapes the gumline to expose more tooth — ideal for short teeth or gummy smiles. Often paired with veneers for proportion."),
    ("app/procedures/page.tsx",
     "Comprehensive dental care under one roof: cosmetic (veneers, whitening, Invisalign), restorative (implants, crowns, full-mouth restoration), periodontal (gum care, grafting), and preventive (cleanings, exams, X-rays).",
     "Comprehensive dental care: cosmetic (veneers, whitening, Invisalign), restorative (implants, crowns), periodontal, and preventive (cleanings, exams, X-rays)."),
    ("app/procedures/periodontal-services/bone-grafting/page.tsx",
     "Dental bone grafting — replace lost bone tissue, prepare the jaw for implants, and halt the progression of gum disease. Autogenous, allograft, and xenograft options.",
     "Dental bone grafting — replace lost bone tissue, prepare the jaw for implants, halt gum disease progression. Autogenous, allograft, xenograft options."),
    ("app/procedures/periodontal-services/page.tsx",
     "Comprehensive periodontal care — scaling and root planing, gum and bone grafting, crown lengthening, sinus augmentation, and ongoing maintenance. Protect gum health and tooth foundation.",
     "Comprehensive periodontal care — scaling, root planing, gum & bone grafting, crown lengthening, sinus augmentation, maintenance. Protect gum & tooth health."),
    ("app/procedures/periodontal-services/what-is-periodontal-gum-disease/page.tsx",
     "Periodontal disease is a 'silent' condition with subtle warning signs. Learn what to watch for and how Piedmont Dental By Design treats gum disease at every stage.",
     "Periodontal disease is a 'silent' condition with subtle warning signs. Learn what to watch for and how we treat gum disease at every stage."),
    ("app/procedures/restoration/dental-implants/page.tsx",
     "Dental implants are the gold standard for replacing missing teeth — artificial roots and teeth surgically placed to restore chewing, speech, and a natural-looking smile.",
     "Dental implants — the gold standard for replacing missing teeth. Surgically placed artificial roots restore chewing, speech, and a natural-looking smile."),
    ("app/procedures/restoration/dentures-partial-dentures/page.tsx",
     "Complete and partial dentures for missing teeth — natural-looking, durable removable appliances customized for fit and comfort. Piedmont Dental By Design in Piedmont, CA.",
     "Complete and partial dentures — natural-looking, durable removable appliances customized for fit and comfort. From Piedmont Dental By Design in Piedmont, CA."),
    ("app/procedures/restoration/fixed-bridges/page.tsx",
     "Fixed (non-removable) dental bridges fill the gap left by one or more missing teeth — permanent porcelain-fused-to-metal restorations. Piedmont Dental By Design in Piedmont, CA.",
     "Fixed dental bridges fill the gap left by missing teeth — permanent porcelain-fused-to-metal restorations. From Piedmont Dental By Design, Piedmont, CA."),
    ("app/procedures/restoration/page.tsx",
     "Comprehensive dental restoration — dental implants, composite fillings, porcelain crowns, fixed bridges, and dentures. Repair damaged or missing teeth and restore function and appearance.",
     "Comprehensive restoration — dental implants, fillings, porcelain crowns, fixed bridges, and dentures. Repair damaged or missing teeth and restore function."),
    ("app/resources/cosmetic-dentistry/page.tsx",
     "Cosmetic dentistry at Piedmont Dental — porcelain veneers, professional whitening, Invisalign®, CEREC same-day crowns, and more. Real patient results and details.",
     "Cosmetic dentistry — porcelain veneers, professional whitening, Invisalign®, CEREC same-day crowns, and more. Real patient results and procedure details."),
    ("app/resources/dental-implants/page.tsx",
     "Real dental implant cases from Dr. Jill Martenson — single-tooth replacements, full-arch rehabilitation, and implant-supported restorations with drag-to-compare results.",
     "Real implant cases from Dr. Martenson — single-tooth replacements, full-arch rehabilitation, and implant-supported restorations with drag-to-compare results."),
    ("app/resources/gummy-smile/page.tsx",
     "What causes a gummy smile and the treatments that reshape the gum line for a more balanced, confident look — crown lengthening, gum contouring, veneers, and orthodontics.",
     "What causes a gummy smile and the treatments that fix it — crown lengthening, gum contouring, veneers, and orthodontics for a balanced, confident look."),
    ("app/resources/insurance/page.tsx",
     "We accept most dental insurance plans and our team handles the paperwork. Here's how billing, pre-treatment estimates, and out-of-network coverage work at our practice.",
     "We accept most dental insurance and handle the paperwork. Here's how billing, pre-treatment estimates, and out-of-network coverage work at our practice."),
    ("app/resources/restorations/page.tsx",
     "Restorative dentistry at Piedmont Dental — porcelain crowns, dental implants, dentures, composite fillings, and fixed bridges, all crafted to look and feel natural.",
     "Restorative dentistry — porcelain crowns, dental implants, dentures, composite fillings, and fixed bridges. All crafted to look and feel natural."),
]

out = []
out.append("")
out.append("---")
out.append("")
out.append("## Manual Rewrites — Hand-Tightened Versions")
out.append("")
out.append("The 24 pages above have substantive content that can't be mechanically compressed. Below are proposed hand-tightened versions targeting ≤ 160 chars. Original meaning and key info preserved; phrasing tightened.")
out.append("")

for path, old, new in manual_rewrites:
    out.append(f"### `{path}`")
    out.append("")
    out.append(f"- **Old** ({len(old)} chars):")
    out.append(f"  > {old}")
    out.append(f"- **New** ({len(new)} chars):")
    out.append(f"  > {new}")
    out.append("")

# verify all under 160
over = [(p, len(n)) for p, _, n in manual_rewrites if len(n) > 160]
if over:
    print(f"ERROR: {len(over)} still over 160:", over, file=sys.stderr)
    sys.exit(1)

with open("DESCRIPTION-REWRITES.md", "a", encoding="utf-8") as f:
    f.write("\n".join(out))
    f.write("\n")

print(f"Appended {len(manual_rewrites)} manual rewrites. All under 160 chars.")
