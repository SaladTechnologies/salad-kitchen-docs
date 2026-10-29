import os,re,sys,json
root='content/docs'
targets=sys.argv[1:] or [root]
pages=set()
for r,_,fs in os.walk(root):
    for f in fs:
        if f.endswith(('.md','.mdx')): pages.add(os.path.normpath(os.path.join(r,os.path.splitext(f)[0]))[len(root)+1:])
pages.add('index')
problems=0
def rep(p,msg):
    global problems; problems+=1; print(f"{p}: {msg}")
for t in targets:
    for r,_,fs in os.walk(t):
        for f in sorted(fs):
            if not f.endswith(('.md','.mdx')): continue
            p=os.path.join(r,f); s=open(p,encoding='utf-8').read()
            fm=re.match(r'^---\n(.*?)\n---\n',s,re.S)
            if not fm: rep(p,'no frontmatter'); continue
            if not re.search(r'^title:\s*\S',fm.group(1),re.M): rep(p,'missing title')
            if not re.search(r'^description:\s*\S',fm.group(1),re.M) or 'TODO' in fm.group(1): rep(p,'missing description')
            body=s[fm.end():]
            if re.search(r'^import ',body,re.M): rep(p,'import statement (breaks prod build)')
            if 'TODO' in body: rep(p,'TODO left in body')
            if 'Community.salad.com' in body or 'community.salad.com' in body: rep(p,'links community.salad.com')
            if re.search(r'support\.salad\.com/(article|category|collection|hc)/',body): rep(p,'links legacy helpscout URL')
            if re.search(r'mirrored',body,re.I): rep(p,'mentions mirrored networking')
            if re.search(r'obliterator',body,re.I): rep(p,'mentions Obliterator')
            for m in re.finditer(r'\]\((/[A-Za-z0-9_\-/]+)(/?)(#[^)]*)?\)',body):
                path=m.group(1).rstrip('/')
                if path.startswith('/contact'): continue
                key=path.lstrip('/') or 'index'
                if key not in pages and not os.path.isdir(os.path.join(root,key)): rep(p,f'broken internal link {path}')
                if m.group(2): rep(p,f'trailing slash in link {path}/')
            for m in re.finditer(r'!\[[^\]]*\]\(([^)]+)\)',body):
                src=m.group(1)
                if src.startswith('http'): continue
                full=os.path.normpath(os.path.join(os.path.dirname(p),src))
                if not os.path.isfile(full): rep(p,f'missing image {src}')
            for m in re.finditer(r'href="(/[A-Za-z0-9_\-/]+)"',body):
                key=m.group(1).strip('/')
                if key not in pages and not os.path.isdir(os.path.join(root,key)): rep(p,f'broken card link {m.group(1)}')
            if '.mdx' not in f and re.search(r'<(Callout|Steps|Step|Accordions|Cards|Tabs)\b',body): rep(p,'component used in .md file (rename to .mdx)')
print('problems:',problems)
